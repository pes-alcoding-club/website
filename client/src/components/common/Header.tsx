import { Box, Button, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BASEURL } from '../../config';
import Nav from './Nav';

interface HeaderProps {
    showApplyBtn?: boolean;
    goToBottom: () => void;
}

const Header: React.FC<HeaderProps> = ({ showApplyBtn, goToBottom }) => (
    <Box w="100vw" backgroundImage={`url(${BASEURL}img/shattered-island.gif)`}>
        <a href="/">
            <Box mx="auto">
                <Image
                    h="250px"
                    w="250px"
                    mx="auto"
                    pt="10px"
                    src="/Logo-w.png"
                    userSelect="none"
                />
            </Box>
        </a>
        <Heading
            as="h2"
            textAlign="center"
            fontSize={{ base: '4xl', lg: '6xl' }}
        >
            <Link href="/">
                <span style={{ color: 'whitesmoke' }}>The Alcoding Club</span>
            </Link>
        </Heading>
        {showApplyBtn && (
            <Link href="/register">
                <Button
                    fontSize={{ lg: 'xl', base: 'md' }}
                    size="lg"
                    _hover={{
                        bg: '#b0152f',
                        textColor: 'whitesmoke',
                    }}
                    bgColor="#e94560"
                    mt="50px"
                    mx="auto"
                    mb={{ lg: '90px', base: '50px' }}
                    display="block"
                    textColor="whitesmoke"
                >
                    Apply to our Monthly Challenge
                </Button>
            </Link>
        )}
        <Nav goToBottom={goToBottom} />
    </Box>
);

export default Header;
