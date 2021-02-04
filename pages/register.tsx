import { Divider, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import Link from 'next/link';
import { Link as L } from '@chakra-ui/react';
import axios from 'axios';
import { Form, Input,Button } from 'antd';

const Register = () => {
    
    const onSubmit = async (values: any) => {
        await axios
            .post('http://localhost:4000/api/register', values)
            .catch(function (err: any) {
                console.log(err);
                alert('Some error while signing up.');
            });
    };

    return (
        <>
            <Form initialValues={{ remember: true }} onFinish={onSubmit}>
                <Form.Item
                    name="name"
                    label="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email id!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                    Register
                </Button>
            </Form>
        </>
    );
};
export default Register;
