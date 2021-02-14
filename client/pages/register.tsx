import React, { useRef } from 'react';
import Form from '../components/Form';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Box } from '@chakra-ui/react';

const Register = () => {
    const containerRef = useRef();
    const goToBottom = () => {
        // @ts-ignore
        containerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };

    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Box ref={containerRef}>
                <Header goToBottom={goToBottom} />
                <Form />
                <Footer />
            </Box>
        </>
    );
};

export default Register;
