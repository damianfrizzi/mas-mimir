import styled from 'styled-components/macro'

export const Navbar = () => {
    return (
        <MyNav>hallo</MyNav>
        
    );
}

const MyNav = styled.nav`
    top: 0;
    width: 100%;
    padding: 20px;
    background-color: blue;
    font-size: calc(10px + 2vmin);
    color: white;
`