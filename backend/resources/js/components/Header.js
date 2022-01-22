import { Button } from '@material-ui/core';
import styled from "styled-components"

function Header() {
    return (
       <TopWrapper>
          <Secondwrapper>
           <Logo>
               <p>Hello World!</p>
           </Logo>
           <Auth>
            <Button variant="contained">Logout</Button>
           </Auth>
          </Secondwrapper>
       </TopWrapper>
    );
}

export default Header;

const TopWrapper = styled.div`

position: fixed;
margin-left: auto;
margin-right: auto;
width: 100vw;
justify-content: center;
z-index:10;
box-sizing: border-box;
top:0;
`

const Secondwrapper = styled.div`
padding: 21px 82px;
display: flex;
position:relative;
`

const Logo= styled.div`
margin-left: 120px;

`

const Auth= styled.div`
position:absolute;
left:0;
`