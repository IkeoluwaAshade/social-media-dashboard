import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <h3>03 November, 2023 (Friday)<p>First Assignment</p></h3>
            
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: #123456;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    


    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div `
    text-align: center;
    line-height: 10px;
`