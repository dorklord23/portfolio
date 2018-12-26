import React, { Component } from 'react'
import { PageHeader, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { Link } from '@reach/router'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    font-size: large;
    font-weight: bold;
`

class Header extends Component {
    render() {
        return (
            <header>
                <Row>
                    <Col xs={12}>
                        <PageHeader>TRI R.A. WIBOWO</PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Navbar inverse collapseOnSelect fluid>
                        <Navbar.Header>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <Navbar.Text>
                                    <StyledLink to="/">HOME</StyledLink>
                                </Navbar.Text>
                                <Navbar.Text>
                                    <StyledLink to="/resume">RESUME</StyledLink>
                                </Navbar.Text>
                                <Navbar.Text>
                                    <StyledLink to="/portfolio">PORTFOLIO</StyledLink>
                                </Navbar.Text>
                                <Navbar.Text>
                                    <StyledLink to="/contact">CONTACT</StyledLink>
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </header>
        )
    }
}

export default Header
