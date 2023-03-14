import React from 'react'
import { Card, Container, Col, Row, Stack } from 'react-bootstrap'
import iconHome from '../../icons/navbar/home.png'
import iconMenu from '../../icons/navbar/menu-post.png'



function Post() {
    return (
        <Container className='mt-1 mb-1 border'>
            <Row className='flex-nowrap'>
                <Col xs={2} md={4} lg={6}>
                    <img className='border rounded-circle' src={iconHome} height="40"></img>
                </Col>
                <Col className='border'>
                    <Stack>
                        <Stack direction='horizontal'>
                            <Row className='flex-nowrap'>
                                <Col>
                                    <p className='text-truncate'>User @useruser</p>
                                </Col>

                                <Col>
                                    <p className="text-truncate">15 мин. назад</p>
                                </Col>

                                <Col className='float-end'>
                                    <img src={iconMenu} height="20"></img>
                                </Col>
                            </Row>
                        </Stack>

                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>


                    </Stack>


                </Col>
            </Row>

        </Container>
    )
}

export default Post