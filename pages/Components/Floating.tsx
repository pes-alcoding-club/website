import React,{useState} from 'react'
import { Container,Button, Heading,Divider,Link} from '@chakra-ui/react'
const Floating = () => {
    const [Ans,setAns]=useState("1");
    return (
            <Button size="lg" _hover={{textColor:"whitesmoke"}} boxShadow="lg" bgColor="#e94560" style={{opacity:Ans,position:"fixed",bottom:"30px",right:"30px"}}>Apply Now</Button>
    )
}
export default Floating