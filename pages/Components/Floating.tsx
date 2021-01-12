import React, { useState } from 'react'
import { Container, Button, Heading, Divider, Link,Box,Text} from '@chakra-ui/react'
import MediaQuery from 'react-responsive'
const Floating = () => {
    const [Ans, setAns] = useState('1')
    return (
        <>
        <MediaQuery minDeviceWidth={1224}>
            <Button
                size="lg"
                _hover={{ textColor: 'whitesmoke' }}
                boxShadow="lg"
                bgColor="#e94560"
                style={{
                    opacity: Ans,
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                }}
            >
                Apply Now
            </Button>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
            <Link>
            <Box _hover={{color:"whitesmoke",textColor:"whitesmoke"}} bgColor="#e94560" color="black" style={{bottom:"0",width:"100%",height:"80px",position:"fixed"}}>
                <Text align="center" style={{margin:"25px auto",fontSize:"25px"}} fontWeight="500">Apply To Our Monthly Challenge</Text>
            </Box>
            </Link>
        </MediaQuery>
        </>
    )
}
export default Floating
