import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const LinkContainer = ({ children }) => (
    <Box
        userSelect="none"
        _hover={{ color: '#e94560' }}
        color="whitesmoke"
        fontSize={{ lg: 'xl', base: 'md' }}
        fontWeight="bold"
    >
        {children}
    </Box>
);

const Nav = () => {
    const { pathname } = useRouter();
    if (pathname === '/') {
        return (
            <Box display="flex" p="30px" w="100%" justifyContent="space-around">
                <LinkContainer>
                    <a href="https://calendar.google.com/calendar?cid=N3RsZGt1dXEwcW1mOW9ub2Jxb3ByZ2Z1cDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                        Calendar
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <Link href="/editorial">Editorial</Link>
                </LinkContainer>
                <LinkContainer>
                    <Link href="/contactus">Contact Us</Link>
                </LinkContainer>
            </Box>
        );
    } else {
        return (
            <Box display="flex" p="30px" w="100%" justifyContent="space-around">
                <LinkContainer>
                    <Link href="/editorials">Editorials</Link>
                </LinkContainer>
                <LinkContainer>
                    <Link href="/">Home</Link>
                </LinkContainer>
                <LinkContainer>
                    <Link href="/contactus">Contact Us</Link>
                </LinkContainer>
            </Box>
        );
    }
};

export default Nav;
