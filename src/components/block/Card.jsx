import React from 'react'
import styled from 'styled-components'
import Dropicon from '../../assets/icon-down.svg'


const Card = ({ userName, totalFollowers, myIcon, Followers }) => {
  return (
    <CardBox>
        <UpperCardBox>
            <SecondComp>
                <Icon>{myIcon}</Icon>
                <span>{userName}</span>
            </SecondComp>

            <ThirdComp>
                <span>{totalFollowers}</span>
                <small>{Followers}</small>
            </ThirdComp>

            <FourthComp>
                <DropIcon></DropIcon>
                <span><img src={Dropicon} alt='Drop Icon' />12 Today</span>
            </FourthComp>
        </UpperCardBox>
    </CardBox>

    
  )
}

export default Card

const CardBox = styled.div``

const UpperCardBox = styled.div`
   background-color: #f0f3fa;
   width: 300px;
   height: 300px;
   border-top:  4px solid #2586df;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 10px;

`

const SecondComp = styled.div`
display: flex;
span {
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
        font-size: 10px;
        letter-spacing: 5px;
        text-transform: uppercase;
    }
`

const FourthComp = styled.div`
    display: flex;
`

const Icon = styled.div``

const DropIcon = styled.div``