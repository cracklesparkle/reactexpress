import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import logo from '../icons/logo.svg';

import { Button, Stack, Container, Row, Col, Image, Form } from 'react-bootstrap';


function Login() {

    const [data, setData] = useState(null)

    const [screen, setScreen] = useState("login");

    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(response => setData(response.message))
    }, [])


    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
                "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    };

    return (
        <Stack direction='vertical' gap={4} className="p-5 mt-5 mb-5">
            <Row className='mb-5 mt-5'>
                <Image className='mb-5 mt-5' height="60" src={logo} />
            </Row>
            <Form.Control type="email" placeholder="Логин" />

            <Form.Control type="password" placeholder="Пароль" />

            <Button variant="secondary" type="submit" disabled>
                Войти
            </Button>

            <Button variant="secondary" type="submit">
                Зарегистрироваться
            </Button>
        </Stack>
    )
}

export default Login