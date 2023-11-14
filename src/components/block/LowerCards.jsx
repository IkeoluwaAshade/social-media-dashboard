import React from 'react'
import styled  from 'styled-components'
import Card2 from './Card2'
import Facebook from '../../assets/icon-facebook.svg'
import Instagram from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'
import youtube from '../../assets/icon-youtube.svg'
import Dropicon from '../../assets/icon-down.svg'
import Upicon from '../../assets/icon-up.svg'



const LowerCards = () => {
  return (
    
    <OverallContainer>

      <Overview>

        <OverviewText>

          <h2>Overview-Today</h2>
          
        </OverviewText>

      </Overview>

      <Container>
        
        <Wrapper>

          <Card2 likes='Page Views' numbers='87' myicon={Facebook} percentage="3%" dropIcon={Upicon} dropColor="hsl(163, 72%, 41%)" />
          <Card2 likes='Likes' numbers='52'  myicon={Facebook} percentage="2%" dropIcon={Dropicon}  dropColor="hsl(356, 69%, 56%)"/>
          <Card2 likes='Likes' myicon={Instagram} numbers="5462" percentage="2257%" dropIcon={Upicon} dropColor="hsl(163, 72%, 41%)" />
          <Card2 likes='Likes' myicon={Instagram} numbers="52k" percentage="13757%" dropIcon={Upicon} dropColor="hsl(163, 72%, 41%)" />
          <Card2 likes='Likes' myicon={twitter} numbers="117" percentage="303%" dropIcon={Upicon} dropColor="hsl(163, 72%, 41%)" />
          <Card2 likes='Retweets' myicon={twitter} numbers="507" percentage="553%" dropIcon={Upicon} dropColor="hsl(163, 72%, 41%)" />
          <Card2 likes='Likes' myicon={youtube} numbers="107" percentage="19%" dropIcon={Dropicon} dropColor="hsl(356, 69%, 56%)" />
          <Card2 likes='Likes' myicon={youtube} numbers="1407" percentage="12%" dropIcon={Dropicon} dropColor="hsl(356, 69%, 56%)"  />

        </Wrapper>

      </Container>

    </OverallContainer>
  )
}

export default LowerCards

const OverallContainer = styled.div`
  
`

const Overview = styled.div`
  margin: 15px 0;
  font-size: 14px;
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
   
`

const OverviewText = styled.div`
  /* background-color: aqua; */
  width: 67%;
  
`

const Container = styled.div`
  /* background-color: green; */
  margin-bottom: 5rem;
  width: 100%;
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column;
`

const Wrapper = styled.div`
    /* background-color: aqua; */
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`

