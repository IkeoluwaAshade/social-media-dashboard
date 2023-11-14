import React from 'react'
import styled from 'styled-components'




const Card2 = ({ likes, myicon, numbers, percentage, dropIcon, dropColor }) => {
  return (
    <CardBox>
        <LowerCardBox>
            <First>
                <PageView>{likes}</PageView>
                <Icon>
                    <img src={myicon} alt="" />
                </Icon>
            </First>

            <Second>
                <Number>{numbers}</Number>

                <Div dropsCol ={dropColor} > 
                <DropIcon> 
                    <img src={dropIcon} alt='Drop Icon' /><span>{percentage}</span>
                </DropIcon>
                </Div>
            </Second>
        </LowerCardBox>
    </CardBox>
  )
}

export default Card2

const CardBox = styled.div`

`

const LowerCardBox = styled.div`
background-color: #f0f3fa;
   width: 300px;
   height: 150px;
   

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 10px;

   cursor: pointer;
   &:hover{
        background-color: hsl(225, 100%, 98%);

    }
`

const First = styled.div`
    width: 78%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
`

const PageView = styled.div`
    color: hsl(228, 12%, 44%);
    font-weight: 700;
`

const Icon = styled.div`
    
`



const Second = styled.div`
    width: 78%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Div = styled.div`
    display: flex;
    color: ${(props) => props.dropsCol};
`

const Number = styled.div`
    color: hsl(230, 17%, 14%);
    font-size: 45px;
    font-weight: 700;

`

const DropIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 800;

   span {
    padding-left: 5px;
   }
`