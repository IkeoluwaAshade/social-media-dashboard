import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Facebook from '../../assets/icon-facebook.svg'
import Twitter from '../../assets/icon-twitter.svg'
import Instagram from '../../assets/icon-instagram.svg'
import youTube from '../../assets/icon-youtube.svg'
import Dropicon from '../../assets/icon-down.svg'
import Upicon from '../../assets/icon-up.svg'



const UpperCards = () => {


  return (
    <Container>
      <Wrapper>

        <Card userName="@nathanf" totalFollowers="1987" myIcon={Facebook} Followers="Followers" headColor = "hsl(208, 92%, 53%)" dropColor="hsl(163, 72%, 41%)" dropicon={Upicon} dropiconText="12 Today" />

        <Card userName="@nathanf" totalFollowers="1044" myIcon={Twitter} Followers="Followers" headColor="hsl(203, 89%, 53%)"dropColor="hsl(163, 72%, 41%)" dropicon={Upicon} dropiconText="99 Today" />

        <Card userName="@realnathanf" totalFollowers="11k" myIcon={Instagram} Followers="Followers" headColor="linear-gradienthsl(37, 97%, 70%) to hsl(329, 70%, 58%)" dropColor="hsl(163, 72%, 41%)" dropicon={Upicon} dropiconText="1099 Today" />

        <Card userName="Nathan F." totalFollowers="8239" myIcon={youTube} Followers="Subscribers" headColor="hsl(348, 97%, 39%)" dropColor="hsl(356, 69%, 56%)" dropicon={Dropicon} dropiconText="144 Today" />

      </Wrapper>
    </Container>
  )
}

export default UpperCards

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    /* background-color: aqua; */
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

