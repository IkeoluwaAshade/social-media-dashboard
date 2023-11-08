import React from 'react'
import styled  from 'styled-components'
import Card2 from './Card2'
import Facebook from '../../assets/icon-facebook.svg'
import Instagram from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'
import youtube from '../../assets/icon-twitter.svg'



const LowerCards = () => {
  return (
    
    <Container>

        <Overview><h2>Overview-Today</h2></Overview>
        
        <Wrapper>

            <Card2 likes='Page Views' numbers='87' myicon={"Facebook"} percentage="3%"/>
            <Card2 likes='Likes' numbers='52'  myicon={"Facebook"} percentage="2%"/>
            <Card2 likes='Likes' myicon={"Instagram"} numbers="5462" percentage="2257%" />
            <Card2 likes='Likes' myicon={"Instagram"} numbers="52k" percentage="13757%" />
            <Card2 likes='Likes' myicon={"twitter"} numbers="117k" percentage="303%" />
            <Card2 likes='Retweets' myicon={"twitter"} numbers="507k" percentage="553%"  />
            <Card2 likes='Likes' myicon={"youtube"} numbers="107k" percentage="19%" />
            <Card2 likes='Likes' myicon={"youtube"} numbers="1407k" percentage="12%"  />

        </Wrapper>
    </Container>
  )
}

export default LowerCards

const Overview = styled.div`
    margin: 15px 0;
    
    /* display: flex;
    justify-content: start;
    align-items: center; */
`

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.div`
    /* background-color: aqua; */
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

