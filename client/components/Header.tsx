import { Box, Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Logo from '../assets/Logo.svg';
import Nav from './Nav';

interface HeaderProps {
    showApplyBtn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showApplyBtn }) => (
    <Box
        w="100vw"
        backgroundImage="url(https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
    >
        <Logo
            style={{
                height: '200px',
                width: '200px',
                margin: '0 auto',
                paddingTop: '10px',
            }}
        />
        <Heading
            as="h2"
            textAlign="center"
            fontSize={{ base: '4xl', lg: '6xl' }}
        >
            The Alcoding Club
        </Heading>
        {showApplyBtn && (
            <Link href="/register">
                <Button
                    _hover={{
                        textColor: 'whitesmoke',
                    }}
                    bgColor="#e94560"
                    mx="auto"
                    my="50px"
                    size="4xl"
                    p="3"
                    fontSize={{ base: 'md', lg: '2xl' }}
                    display="block"
                    fontWeight="bold"
                >
                    Apply to our Monthly Challenge
                </Button>
            </Link>
        )}
        <Nav />
    </Box>
);

export default Header;
