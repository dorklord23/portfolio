import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Content from '../Content'

class Home extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Content>
                        <header>
                            <h2>
                                Howdy!!
                            </h2>
                        </header>
                        <p>
                            Welcome to my humble website. You can view my resume, professional works, and
                            other projects here.
                        </p>
                        <p>
                            I am former Web Developer at <a href="http://interaktiv.sg" target="_blank" rel="noopener noreferrer">InterAktiv Technology Pte Ltd</a> (2018&mdash;2019). Currently, I am active as a freelancer in <a href="https://www.upwork.com/o/profiles/users/_~01651fea5110a6effb/" target="_blank" rel="noopener noreferrer">Upwork</a>. Most of the times, I use React and Express.js but I am open to use other technologies if situation demands it. I have confidence in my learning capabilities so I am up for new technologies/libraries.
                        </p>
                        <p>
                            Currently learning Go and building a RESTful API with it.
                        </p>
                        <p>
                            Please don't hesitate to contact me if you want to talk about something&mdash;be it job offers (I personally prefer remote ones nowadays) or maybe you just want to grab a coffee with me. I am always open to new possibilities!
                        </p>
                    </Content>
                </Col>
            </Row>

        )
    }
}

export default Home
