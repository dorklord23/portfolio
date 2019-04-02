import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import Content from '../Content'

const Job = styled.span`
    font-weight: bold;
`

class Resume extends Component {
    // componentDidMount() {
    //     const link = document.getElementsByClassName('LI-view-profile')
    //
    //     if (link) {
    //         link.target = '_blank'
    //         link.rel = 'noopener noreferrer'
    //     }
    // }

    render() {
        return (
            <Row>
                <Col sm={12}>
                    <Content>
                        <header>
                            <h2>
                                TRI RUMEKSO ANGGIE WIBOWO
                            </h2>
                        </header>
                        <p>FULL STACK WEB DEVELOPER</p>
                        <address>
                            <p>Karawang, Indonesia</p>
                            <p>trirawibowo (at) gmail (period) com</p>
                        </address>
                        <section>
                            <h4>SUMMARY</h4>
                            <p>
                                Proficient in Javascript (both server and client-side). I have developed multiple web-based apps in React and Express whether it is on private server or on SaaS platforms.
                            </p>
                            <p>
                                I have been developing an online platform to play <a href="http://www.animaprimerpg.com" target="_blank" rel="noopener noreferrer">Anima Prime</a>. It will consist of three components: a backend written in Go; a mobile app written with Flutter; and a web app written with React. Currently writing <a href="https://github.com/dorklord23/anima-prime-api" target="_blank" rel="noopener noreferrer">the backend</a>.
</p>
                            <p>
                                My tech stack includes&mdash;but is not limited to&mdash;Javascript, Node.js, React, Redux, Apache, Nginx, MySQL, MongoDB, Firebase, and Salesforce.
                            </p>
                        </section>
                        <section>
                            <h4>EXPERIENCE</h4>
                            <ul>
                                <li><Job>Frontend Developer</Job> at <a href="http://interaktiv.sg" target="_blank" rel="noopener noreferrer">InterAktiv Technology Pte Ltd</a> (2018&mdash;2019)</li>
                                <p>
                                    I develop web-based apps in React and use Firebase and Salesforce.
                                </p>
                                <li><a href="https://www.upwork.com/o/profiles/users/_~01651fea5110a6effb/" target="_blank" rel="noopener noreferrer"><Job>Freelance Full Stack Web Developer</Job></a> (2017&mdash;current)</li>
                                <p>
                                    I help developing a website with Gatsby (added booking functionality)
                                </p>
                                <li><Job>Backend Developer</Job> and <Job>Co-Founder</Job> at <a href="https://shipper.id" target="_blank" rel="noopener noreferrer">Shipper Indonesia</a> (2016&mdash;2017)</li>
                                <p>
                                    I was one of the co-founders and have developed the API to aggregate delivery rates of various shipment services.
                                </p>
                            </ul>
                        </section>
                        <section>
                            <h4>EDUCATION</h4>
                            <ul>
                                <li>Bachelor of Public Administration at Open University of Indonesia (2018&mdash;2022)</li>
                                <li>Associate degree of Computer Science at Politeknik Perdana Mandiri, Indonesia (2008&mdash;2011)</li>
                            </ul>
                        </section>
                    </Content>
                </Col>
                {/* <Col sm={3}>
                    <div
                        className="LI-profile-badge"
                        data-version="v1"
                        data-size="medium"
                        data-locale="en_ID"
                        data-type="vertical"
                        data-theme="dark"
                        data-vanity="tri-rumekso-anggie-wibowo"
                        style={{ marginTop: 10 }}
                    >
                        <a
                            className="LI-simple-link"
                            href='https://id.linkedin.com/in/tri-rumekso-anggie-wibowo?trk=profile-badge'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tri Rumekso Anggie Wibowo
                        </a>
                    </div>
                </Col> */}
            </Row>
        )
    }
}

export default Resume
