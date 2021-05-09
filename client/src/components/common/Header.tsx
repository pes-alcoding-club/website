import { Box, Button, Heading , Link as ChakraLink} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nav from './Nav';

interface HeaderProps {
    showApplyBtn?: boolean;
    containerRef: React.MutableRefObject<undefined>;
}

const Header: React.FC<HeaderProps> = ({ showApplyBtn, containerRef }) => (
    <Box w="100vw" backgroundImage={`url(/shattered-island.gif)`}>
        <a href="/" style={{ cursor: 'pointer' }}>
            <Box mx="auto" display="flex" justifyContent="center">
                <Image
                    height="250px"
                    width="250px"
                    src="/Logo-w.png"
                    alt="alcoding logo"
                    priority
                />
            </Box>
        </a>
        <Heading
            as="h2"
            textAlign="center"
            fontSize={{ base: '4xl', lg: '6xl' }}
            mb="30px"
        >
            <Link href="/">
                <span style={{ color: 'whitesmoke' }}>The Alcoding Club</span>
            </Link>
        </Heading>
        {showApplyBtn && (
            <ChakraLink href="https://www.hackerrank.com/alcoding-summer-challenge-2021">
                <Button
                    fontSize={{ lg: 'xl', base: 'md' }}
                    size="lg"
                    _hover={{
                        bg: '#b0152f',
                        textColor: 'whitesmoke',
                    }}
                    bgColor="#e94560"
                    mx="auto"
                    my="50px"
                    display="block"
                    textColor="whitesmoke"
                >
                    Apply to our Monthly Challenge
                </Button>
            </ChakraLink>
        )}
        <Nav containerRef={containerRef} />
    </Box>
);

export default Header;
