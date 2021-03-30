import { Box, Divider } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import AboutContest from '../src/components/register/AboutContest';
import Footer from '../src/components/common/Footer';
import Form from '../src/components/register/Form';
import Header from '../src/components/common/Header';

const Register = () => {
    const containerRef = useRef();
    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Box w="100vw" ref={containerRef}>
                <Header containerRef={containerRef} />
                <AboutContest />
                <Divider my="2" />
                <Form />
                <Footer />
            </Box>
        </>
    );
};

export default Register;
