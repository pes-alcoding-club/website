import { Divider, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import Link from 'next/link';
import { Link as L } from '@chakra-ui/react';
import axios from 'axios';

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

        </>
    );
};
export default Register;
