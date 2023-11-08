import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Facebook from '../../assets/icon-facebook.svg'
import Instagram from '../../assets/icon-instagram.svg'
import youTube from '../../assets/icon-twitter.svg'

const UpperCards = () => {
  return (
    <Container>
        <Wrapper>
            <Card userName="@nathanf" totalFollowers="1987" myIcon={"Facebook"} Followers="Followers" />
            <Card userName="@nathanf" totalFollowers="1044" myIcon={"Facebook"} Followers="Followers" />
            <Card userName="@realnathanf" totalFollowers="11k" myIcon={"Instagram"} Followers="Followers" />
            <Card userName="Nathan F." totalFollowers="8239" myIcon={"youTube"} Followers="Subscribers" />
        </Wrapper>
    </Container>
  )
}

export default UpperCards

const Container = styled.div`
    width: 100%;
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