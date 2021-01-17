import { Link as L } from '@chakra-ui/react';
import React, { FC } from 'react';
import Link from 'next/link';

interface props {
    l1: String;
    l2: String;
    l3: String;
}

const Nav: FC<props> = ({ l1, l2, l3 }) => {
    var lr = l2;
    if (l2 == 'Home') {
        lr = '/';
    }
    return (
        <div
            style={{
                display: 'flex',
                padding: '30px',
                width: '100%',
                justifyContent: 'space-around',
            }}
        >
            <L
                _hover={{ color: '#e94560' }}
                color="whitesmoke"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
            >
                <Link href={String(l1)}>{l1}</Link>
            </L>
            <L
                _hover={{ color: '#e94560' }}
                color="whitesmoke"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
            >
                <Link href={String(lr)}>{l2}</Link>
            </L>
            <L
                _hover={{ color: '#e94560' }}
                color="whitesmoke"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
            >
                <Link href={String(l2)}>{l3}</Link>
            </L>
        </div>
    );
};
export default Nav;
