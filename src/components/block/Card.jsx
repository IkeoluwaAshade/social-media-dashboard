import React from 'react'
import styled from 'styled-components'
import Dropicon from '../../assets/icon-down.svg'
import Upicon from '../../assets/icon-up.svg'


const Card = ({ userName, totalFollowers, myIcon, Followers, headColor, dropColor }) => {
  return (
    <CardBox >
        <UpperCardBox bgCol ={headColor}>
            <SecondComp>
                <Icon>
                    <img src={myIcon} alt="" />
                </Icon>
                <span>{userName}</span>
            </SecondComp>

            <ThirdComp>
                <span>{totalFollowers}</span>
                <small>{Followers}</small>
            </ThirdComp>

            <FourthComp dropsCol ={dropColor}>
                
                <span><img src={Upicon} alt='Drop Icon' />12 Today</span>

                
            </FourthComp>
        </UpperCardBox>
    </CardBox>

    
  )
}

export default Card

const CardBox = styled.div`
    
`

const UpperCardBox = styled.div`
   background-color: hsl(227, 47%, 96%);
   width: 300px;
   height: 300px;
   border-top:  4px solid ${(props) => props.bgCol};
   

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

const SecondComp = styled.div`
display: flex;
span {
    color: hsl(228, 12%, 44%);
    margin-left: 5px;
    font-weight: 700;
}
`

const ThirdComp = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        font-size: 50px;
        font-weight: bold;
    }

    small {
        /* color: hsl(230, 17%, 14%); */
        font-size: 10px;
        letter-spacing: 5px;
        text-transform: uppercase;
    }
`

const FourthComp = styled.div`
    display: flex;
    color: ${(props) => props.dropsCol};
    
    span {
       
    }
`

const Icon = styled.div``

