import { Link } from '@chakra-ui/react';
import React from 'react';

const Nav = () => {
    return (
        <div
            style={{
                display: 'flex',
                padding: '30px',
                width: '100%',
                justifyContent: 'space-around',
            }}
        >
            <Link
                _hover={{ color: '#e94560' }}
                color="whitesmoke"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
            >
                Register
            </Link>
            <Link
                _hover={{ color: '#e94560' }}
                color="whitesmoke"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
            >
                Editorials
            </Link>
            <Link
                _hover={{ color: '#e94560' }}
                color="whitesmoke"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
            >
                Contact Us
            </Link>
        </div>
    );
};
export default Nav;
