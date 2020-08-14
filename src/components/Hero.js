import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/esm/Container'
import Row from'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Hero(props) {
    return (
        <div>
            <Jumbotron className="bg-transparent jumbortron-fluid p-0">
                <Container fluid={true}>
                    <Row className="justify-content-center py-5">
                        <Col md={6} sm={12} className="justify-content-center ">
                                {
                                    props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>
                                }
                                {
                                    props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>
                                }
                                {
                                    props.text && <h3 className="lead font-weight-light">{props.text}</h3>
                                }
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Hero
