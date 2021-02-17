import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import Footer from '../src/components/Footer';
import Form from '../src/components/Form';
import Header from '../src/components/Header';
import PreviousContests from '../src/components/PreviousContests';

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
            <Box w="100vw" ref={containerRef}>
                <Header goToBottom={goToBottom} />
                <PreviousContests />
                <Form />
                <Footer />
            </Box>
        </>
    );
};

export default Register;
