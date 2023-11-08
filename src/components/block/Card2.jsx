import React from 'react'
import styled from 'styled-components'
import Dropicon from '../../assets/icon-down.svg'



const Card2 = ({ likes, myicon, numbers, percentage }) => {
  return (
    <CardBox>
        <LowerCardBox>
            <First>
                <PageView>{likes}</PageView>
                <Icon> {myicon} </Icon>
            </First>

            <Second>
                <Number>{numbers}</Number>
                <DropIcon><img src={Dropicon} alt='Drop Icon' />{percentage}</DropIcon>
            </Second>
        </LowerCardBox>
    </CardBox>
  )
}

export default Card2

const CardBox = styled.div`
  
`

const LowerCardBox = styled.div`
/* display: flex;
justify-content: space-between;
align-items: center;
width: 50%;
padding: 21px; */

background-color: #f0f3fa;
   width: 300px;
   height: 150px;
   

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 10px;
`

const First = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
`

const PageView = styled.div`
    
`

const Icon = styled.div`
    
`



const Second = styled.div`
     width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Number = styled.div`
    
`

const DropIcon = styled.div`
    
`