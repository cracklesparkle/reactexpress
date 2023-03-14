import React from 'react'

import { Button, Stack, Container, Row, Col, Form, FormControl, Image, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import iconHome from '../icons/navbar/home.png'
import iconMenu from '../icons/navbar/menu-post.png'

import Post from './components/Post';

function Home() {
    return (
        <Stack direction='vertical'>
            <Navbar bg="light" sticky="top" className=''>
                <Container>
                    <img src={iconHome} width="40" className='p-2'></img>
                    <h4>Главное</h4>
                    <img src={iconHome} width="40" className='p-2'></img>
                </Container>
            </Navbar>

            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <NavDropdown title="Новости" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Действие1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Действие2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Действие3</NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Для Вас</Nav.Link>
                </Nav.Item>
            </Nav>

            <Stack direction='vertical' gap={1}>
                <Post />
                <Post />
                <Post />
            </Stack>

            <Navbar bg="light" fixed="bottom" className='border'>
                <Container>
                    <img src={iconHome} width="40" className='p-2'></img>
                    <img src={iconHome} width="40" className='p-2'></img>
                    <img src={iconHome} width="40" className='p-2'></img>
                    <img src={iconHome} width="40" className='p-2'></img>
                    <img src={iconHome} width="40" className='p-2'></img>
                </Container>
            </Navbar>
        </Stack>
    )
}

export default Home