import { Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import MediaQuery from 'react-responsive';
import Link from 'next/link';
import { Link as L } from '@chakra-ui/react';

const AboutUs = () => {
    return (
        <>
            <MediaQuery minDeviceWidth={1224}>
                <div>
                    <Heading
                        style={{
                            textAlign: 'center',
                            margin: '70px auto 50px',
                        }}
                    >
                        About Us
                    </Heading>
                    <Text
                        align="center"
                        style={{
                            padding: '0 110px 0 110px',
                            margin: '0 0 60px 0',
                        }}
                        fontSize="lg"
                    >
                        The Alcoding Club is the official Competitive
                        Programming Club under the CSE Department of PES
                        University. The club aims to cultivate and promote the
                        skills of competitive programming and problem solving in
                        the campus through our workshops and discussions
                        sessions, where we discuss previous online competition
                        problems and try to come up with solutions to those
                        problems. The competitions we participate in can be
                        found here on our{' '}
                        <L color="#fd6378">
                            <Link href="calendar">Calendar</Link>
                        </L>
                        .
                    </Text>
                    <Text
                        align="center"
                        style={{
                            padding: '0 110px 0 110px',
                            margin: '0 0 70px 0',
                        }}
                        fontSize="lg"
                    >
                        The Alcoding Club is also responsible for representing
                        the university in various regional and international
                        coding competitions, from college fests, to major events
                        like the ACM ICPC, Google Kickstart and more. The Club
                        also hosts various competitions throughout the year.
                        While most of the competitions we host are online, we
                        also host an annual flagship coding competition where
                        students from colleges all over the country compete.
                        Finally, the Alcoding Club undertakes various
                        development projects every year, and offers summer
                        internships to work on the same. You can check out our
                        previous and ongoing projects{' '}
                        <L
                            color="#fd6378"
                            href="https://github.com/pes-alcoding-club/website"
                            userSelect="none"
                        >
                            here
                        </L>
                        .
                    </Text>
                    <Divider />
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <div style={{ width: '140%' }}>
                    <Heading
                        style={{
                            textAlign: 'center',
                            margin: '70px auto 50px',
                        }}
                    >
                        About Us
                    </Heading>
                    <Text
                        align="center"
                        style={{
                            padding: '0 70px 0 70px',
                            margin: '0 0 60px 0',
                        }}
                        fontSize="lg"
                    >
                        The Alcoding Club is the official Competitive
                        Programming Club under the CSE Department of PES
                        University. The club aims to cultivate and promote the
                        skills of competitive programming and problem solving in
                        the campus through our workshops and discussions
                        sessions, where we discuss previous online competition
                        problems and try to come up with solutions to those
                        problems. The competitions we participate in can be
                        found here on our{' '}
                        <L color="#fd6378">
                            <Link href="calendar">Calendar</Link>
                        </L>
                        .
                    </Text>
                    <Text
                        align="center"
                        style={{
                            padding: '0 70px 0 70px',
                            margin: '0 0 70px 0',
                        }}
                        fontSize="lg"
                    >
                        The Alcoding Club is also responsible for representing
                        the university in various regional and international
                        coding competitions, from college fests, to major events
                        like the ACM ICPC, Google Kickstart and more. The Club
                        also hosts various competitions throughout the year.
                        While most of the competitions we host are online, we
                        also host an annual flagship coding competition where
                        students from colleges all over the country compete.
                        Finally, the Alcoding Club undertakes various
                        development projects every year, and offers summer
                        internships to work on the same. You can check out our
                        previous and ongoing projects{' '}
                        <L
                            color="#fd6378"
                            href="https://github.com/pes-alcoding-club/website"
                            userSelect="none"
                        >
                            here
                        </L>
                        .
                    </Text>
                    <Divider />
                </div>
            </MediaQuery>
        </>
    );
};
export default AboutUs;
