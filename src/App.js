import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Router } from '@reach/router'

import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

import './style/index.css'

class App extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Router>
                            <Home path="/" />
                            <Resume path="/resume" />
                            <Portfolio path="/portfolio" />
                            <Contact path="/contact" />
                        </Router>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Footer />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default App
