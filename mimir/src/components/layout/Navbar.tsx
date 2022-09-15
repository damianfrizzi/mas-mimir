import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

export const Navbar = () => {
    const [state, setState] = useState({ fancy: false })

    return (
        <MyNav {...state}>
            <NavTitle to="/" onClick={() => setState({ fancy: !state.fancy })}>mimir</NavTitle>
            <StatusPill>New Game</StatusPill>
            <ManageLink to="/cards">Manage Cards</ManageLink>
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

const NavTitle = styled(Link)`
    padding: 20px;
    font-size: calc(10px + 2vmin);
    color: white;
    text-decoration: none;
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

const ManageLink = styled(Link)`
    padding: 20px;
    font-size: calc(1px + 2vmin);
    color: white;
    text-decoration: none;
`