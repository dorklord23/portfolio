import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Content from '../Content'

class Contact extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Content>
                        <header>
                            <h3>
                                You could reach out to me through various platforms
                            </h3>
                        </header>
                        <ul>
                            <li>Email: trirawibowo (at) gmail (period) com</li>
                            <li>Skype: tri.ra.wibowo</li>
                            <li><a href="https://www.quora.com/profile/Tri-Rumekso-Anggie-Wibowo-1" target="_blank" rel="noopener noreferrer">Quora</a></li>
                            <li><a href="https://www.upwork.com/o/profiles/users/_~01651fea5110a6effb/" target="_blank" rel="noopener noreferrer">Upwork</a></li>
                            <li><a href="https://www.linkedin.com/in/tri-rumekso-anggie-wibowo/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="http://github.com/dorklord23" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </Content>
                </Col>
            </Row>

        )
    }
}

export default Contact
