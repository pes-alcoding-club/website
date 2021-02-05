import React from 'react';
import Form from '../components/Form';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Register = () => (
    <>
        <Head>
            <title>The Alcoding Club</title>
        </Head>
        <Header l1="Editorials" l2="Home" l3="Contact Us" />
        <Form />
        <Footer />
    </>
);

export default Register;
