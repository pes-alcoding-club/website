import React from 'react'
import { Container, Heading, ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header'
import AboutUs from './Components/AboutUs'
import Floating from './Components/Floating'
import Footer from './Components/Footer'
import MediaQuery from 'react-responsive'

const Landing = () => {
    return (
        <ChakraProvider>
                <Header/>
                <AboutUs />
                <Footer />
                <Floating />
        </ChakraProvider>
    )
}

export default Landing
