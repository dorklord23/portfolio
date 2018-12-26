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
                        <p>
                            <ul>
                                <li>Email: trirawibowo (at) gmail (period) com</li>
                                <li>Skype: tri.ra.wibowo</li>
                                <li>Quora: <a href="https://www.quora.com/profile/Tri-Rumekso-Anggie-Wibowo-1" target="_blank" rel="noopener noreferrer">Tri Rumekso Anggie Wibowo</a></li>
                                <li>Upwork: <a href="https://www.upwork.com/o/profiles/users/_~01651fea5110a6effb/" target="_blank" rel="noopener noreferrer">Tri Rumekso Anggie Wibowo</a></li>
                            </ul>
                        </p>
                    </Content>
                </Col>
            </Row>

        )
    }
}

export default Contact
