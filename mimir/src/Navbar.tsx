import styled from 'styled-components/macro'

export const Navbar = () => {
    return (
        <MyNav fancy>
            <NavTitle>mimir</NavTitle>
            <StatusPill>Status</StatusPill>
            <NavTitle>Manage</NavTitle>
        </MyNav>
    );
}

interface NavbarProps { fancy?: Boolean }

const MyNav = styled.nav<NavbarProps>`
    top: 0;
    width: 100%;
    background-color: ${p => p.fancy ? 'purple' : 'darkgreen'};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavTitle = styled.div`
    padding: 20px;
    font-size: calc(10px + 2vmin);
    color: white;
`

const StatusPill = styled.div`
    background-color: #4CAF50;
    border: none;
    border-radius: 12px;
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
`

const ManageLink = styled.div`
    
`