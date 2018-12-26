import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col xs={12}>
                        <p>Copyright © 2018 Tri R.A. Wibowo. All rights reserved.</p>
                    </Col>
                </Row>
            </footer>
        )
    }
}

export default Footer
