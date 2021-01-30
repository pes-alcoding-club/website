import { Divider, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import MediaQuery from 'react-responsive';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Calendar = () => {
    return (
        <>
            <Head>
                <title>Calendar</title>
            </Head>
            <MediaQuery minDeviceWidth={1224}>
                <div
                    style={{
                        backgroundImage:
                            'url(' +
                            'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' +
                            ')',
                        backgroundSize: '1550px 750px',
                    }}
                >
                    <Heading
                        style={{
                            textAlign: 'center',
                            margin: '0 auto',
                            fontSize: '65px',
                            padding: '100px 0 0 0',
                        }}
                    >
                        Calendar
                    </Heading>
                    <Text
                        align="center"
                        style={{
                            padding: '0 110px 0 110px',
                            margin: '15px 0 70px 0',
                        }}
                        fontSize="lg"
                    >
                        Nulla sit amet sapien vitae mauris tempor ultricies nec
                        finibus sapien. Nunc id nisi in velit vulputate finibus.
                        Aenean bibendum magna sit amet pellentesque rhoncus.
                    </Text>
                    <Nav l1="Editorials" l2="Home" l3="Contact Us" />
                    <Divider />
                </div>
                <div>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=7tldkuuq0qmf9onobqoprgfup4%40group.calendar.google.com&ctz=Asia%2FKolkata"
                        style={{
                            width: '1200px',
                            height: '800px',
                            margin: '20px auto 20px',
                        }}
                    ></iframe>
                </div>
                <Footer />
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <div
                    style={{
                        backgroundImage:
                            'url(' +
                            'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' +
                            ')',
                        backgroundSize: '1550px 750px',
                        width: '140%',
                    }}
                >
                    <Heading
                        style={{
                            textAlign: 'center',
                            margin: '0 auto',
                            fontSize: '65px',
                            padding: '100px 0 0 0',
                        }}
                    >
                        Calendar
                    </Heading>
                    <Text
                        align="center"
                        style={{
                            padding: '0 110px 0 110px',
                            margin: '15px 0 70px 0',
                        }}
                        fontSize="lg"
                    >
                        Nulla sit amet sapien vitae mauris tempor ultricies nec
                        finibus sapien. Nunc id nisi in velit vulputate finibus.
                        Aenean bibendum magna sit amet pellentesque rhoncus.
                    </Text>
                    <Nav l1="Editorials" l2="Home" l3="Contact Us" />
                </div>
                <div>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=7tldkuuq0qmf9onobqoprgfup4%40group.calendar.google.com&ctz=Asia%2FKolkata"
                        style={{
                            width: '140%',
                            height: '800px',
                            margin: '20px auto 20px',
                        }}
                    />
                </div>
                <Footer />
            </MediaQuery>
        </>
    );
};

export default Calendar;
