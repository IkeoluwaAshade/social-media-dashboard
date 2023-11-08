import React, { useState } from 'react'
import styled from "styled-components"
import { BsToggle2On } from 'react-icons/bs'
import { BsToggle2Off } from 'react-icons/bs'

const Header = () => {

    const [toggle, setToggle] = useState (false)

    const toggleChange = () => {setToggle(!toggle)}

  return (

    <Container>
        <Wrapper>
            <Logo>
                <Social>Social Media Dashboard</Social>
                <small>Tootal Follower 23,004</small>
            </Logo>

            
            <Toggle onClick={toggleChange}>
            <span>dark mode</span>
                {toggle ? (
                    /* Dark mode */
                    <BsToggle2On size={25} />  

                ) : (
                    /* Light mode */
                    <BsToggle2Off size={25} />

                
                )}
            
            
            </Toggle>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
/* background-color: aqua; */
width: 100%;
height: 120px;

display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
/* background-color: gray; */
width: 85%;

display: flex;
justify-content: space-between;
align-items: center;

span {
    /* font-size: 25px; */
    margin-right: 20px;
}
`

const Logo = styled.div `
    small{
        font-size: 14px;
        font-weight: 600;
    }
`

const Social = styled.div`
    font-size: 24px;
    font-weight: 800;
`

const Toggle = styled.div`
    display: flex;
`

