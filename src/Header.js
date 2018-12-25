import React, { Component } from 'react'
import { PageHeader, Row, Col } from 'react-bootstrap'
import { Link } from '@reach/router'
import styled from 'styled-components'

const NavBar = styled.nav`
    background-color: grey;
`

class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <PageHeader>Tri R.A. Wibowo</PageHeader>
                    </Col>
                </Row>
                <Row>
                    <NavBar>
                        <Col sm={3}>
                            <Link to="/">Home</Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/resume">Resume</Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/portfolio">Portfolio</Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/contact">Contact</Link>
                        </Col>
                    </NavBar>
                </Row>
            </div>

        )
    }
}

export default Header
