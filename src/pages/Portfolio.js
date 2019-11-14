import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components'

import Content from '../Content'

import dx from '../images/dx.png'
import gudangFurniture from '../images/gudangfurniture.png'
import scrubs from '../images/scrubs.png'
import spmf from '../images/spmf.png'
import smOnline from '../images/sm-online.png'

const Footnote = styled.p`
    font-size: small;
    font-style: italic;
`

const ImageContainer = styled.p`
    width: 60%;
    height: auto;
`

class Portfolio extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Content>
                        <header>
                            <h2>
                                My Completed and Ongoing Works
                            </h2>
                        </header>
                        <ol>
                            <li>COMPLETED</li>
                            <ul>
                                <li>DoubleHelix&trade; Report Generator<sup>*</sup></li>
                                <ImageContainer>
                                    <Image src={dx} thumbnail responsive />
                                </ImageContainer>
                                <li>
                                    Gudang Furniture
                                </li>
                                <ImageContainer>
                                    <a href="http://gudangfurniture.com/" target="_blank" rel="noopener noreferrer">
                                        <Image src={gudangFurniture} thumbnail responsive />
                                    </a>
                                </ImageContainer>
                                <li>Scrubs Car Detailing <sup>*</sup></li>
                                <ImageContainer>
                                    <Image src={scrubs} thumbnail responsive />
                                </ImageContainer>
                                <li>Straits Times Pocket Money Fund <sup>*</sup></li>
                                <ImageContainer>
                                    <Image src={spmf} thumbnail responsive />
                                </ImageContainer>
                                <li>
                                    SM Online
                                </li>
                                <ImageContainer>
                                    <a href="https://play.google.com/store/apps/details?id=com.smonline" target="_blank" rel="noopener noreferrer">
                                        <Image src={smOnline} thumbnail responsive />
                                    </a>
                                </ImageContainer>
                            </ul>
                            <br />
                            {/* <li>ONGOING</li>
                            <ul>
                            </ul> */}
                        </ol>
                        <Footnote>* I can't disclose the URL because it's a private/in-development app.</Footnote>
                    </Content>
                </Col>
            </Row>

        )
    }
}

export default Portfolio
