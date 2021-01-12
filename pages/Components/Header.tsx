import React from 'react'
import { Container,Button, Heading,Divider} from '@chakra-ui/react'
import Nav from "./Nav";
import Logo from "../Assets/Logo.svg";
const Header = () => {
    return (
        <div>
            <Logo style={{height:'200px',width:"200px",margin:"30px auto 0"}}/>
            <Heading style={{textAlign:"center",margin:"10px 0 0 0",fontSize:"65px"}}>The Alcoding Club</Heading>
            <Button size="lg" _hover={{bg:"#0f3460",textColor:"whitesmoke"}} bgColor="#e94560" style={{margin:"30px auto 90px",display:"block"}}>Apply To Our Monthly Challenge</Button>
            <Nav/>
            <Divider/>
        </div>

    )
}
export default Header