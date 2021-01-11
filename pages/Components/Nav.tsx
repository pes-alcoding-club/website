import React from 'react'
import { Container,Button, Heading,Divider,Link} from '@chakra-ui/react'
const Nav = () => {
    return (
        <div style={{display:"flex",padding:"30px",width:"100%",justifyContent:"space-around"}}>
            <Link>Register</Link>
            <Link>Editorials</Link>
            <Link>Contact Us</Link>
        </div>

    )
}
export default Nav