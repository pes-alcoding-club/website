import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import Link from 'next/link';

interface props {
    l1: String;
    l2: String;
    l3: String;
}

const LinkContainer = ({ children }) => (
    <Box
        userSelect="none"
        _hover={{ color: '#e94560' }}
        color="whitesmoke"
        style={{ fontSize: '20px', fontWeight: 'bold' }}
    >
        {children}
    </Box>
);

const Nav: FC<props> = ({ l1, l2, l3 }) => (
    <Box display="flex" p="30px" w="100%" justifyContent="space-around">
        <LinkContainer>
            <Link href={l1.toLowerCase()}>{l1}</Link>
        </LinkContainer>
        <LinkContainer>
            <Link href={l2 === 'Home' ? '/' : l2.toLowerCase()}>{l2}</Link>
        </LinkContainer>
        <LinkContainer>
            <Link href={l3 == 'Contact Us' ? 'contactus' : l3.toLowerCase()}>
                {l3}
            </Link>
        </LinkContainer>
    </Box>
);

export default Nav;
