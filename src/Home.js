import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Content = styled.div`
    background-color: grey;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
`

class Home extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Content>
                        <h2>
                            Howdy!!
                        </h2>
                        <p>
                            Welcome to my humble website. You can view my resume, professional works, and
                            hobby projects here.
                        </p>
                        <p>
                            I am currently working as Web Developer at <a href="http://interaktiv.sg" target="_blank" rel="noopener noreferrer">InterAktiv Technology Pte Ltd</a> and active as well as a freelancer in <a href="https://www.upwork.com/o/profiles/users/_~01651fea5110a6effb/" target="_blank" rel="noopener noreferrer">Upwork</a>. Most of the times, I use React and Express.js but I am open to use other technologies if situation demands it. I have confidence in my learning capabilities so I am up for new technologies/libraries.
                        </p>
                        <p>
                            Please don't hesitate to contact me if you want to talk about something&mdash;be it job offers, remote jobs, or maybe you just want to grab a coffe with me. I am always open to new possibilities!
                        </p>
                    </Content>
                </Col>
            </Row>

        )
    }
}

export default Home
