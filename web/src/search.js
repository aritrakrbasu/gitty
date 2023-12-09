import React, { useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import logo from './logo-white.png'
import './Bg.css';

function Search() {
    const userIdRef = useRef()
    const [userId, setuserId] = useState()
    const [loading, setLoading] = useState(true)

    function setUserId()
    {
        if(userIdRef.current.value === '')
        {
            setLoading(true)
        }else
        {
            setLoading(false)
            setuserId(userIdRef.current.value)
        }
    }
    function transform(e)
    {
        e.preventDefault()
        var current_location = window.location.href
        window.location.href=current_location+'?id='+userId
    }

    return (
        <div className="home-screen-container">
        <div id="stars-container">
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
        </div>
         <Container fluid>
         <Row className="illustration-container">
             <Col lg={12}>
                 <div className ="fs home-section">
                 <a id="forkMe" href="https://github.com/aritrakrbasu/gitty">Fork me on GitHub</a>
                     <img src={logo} alt="Logo" />
                     <div className="home-section-highlight">
                         Transform your github to portfolio website
                     </div>
                     <div className="home-section-label">Search your Profile</div> 
                         <Form onSubmit={transform}>
                             <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Control className="home-section-input" type="text" placeholder="Github Id" onChange={setUserId} ref={userIdRef} autoComplete="off" />
                             </Form.Group>
                             {!loading && (<Button type="submit" variant="light" className="home-section-btn">Transform Now</Button>)}
                             
                         </Form>
                     </div>
             </Col>
         </Row>
     </Container>
     </div>
    )
}

export default Search
