import React from 'react'
import styled from 'styled-components'
import UpperCards from '../../components/block/UpperCards'
import LowerCard from '../../components/block/LowerCards'

const Home = () => {
  return (
    <Container>
        <UpperCards />
        <LowerCard />
    </Container>
  )
}

export default Home

const Container = styled.div`
  background-color: hsl(0, 0%, 100%);
`