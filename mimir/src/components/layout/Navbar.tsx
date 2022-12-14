import { fetchGame } from "api/mimir-backend";
import { AppContext } from "data/Context";
import { ActionType } from "models/Action";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Navbar = () => {
  const { game, dispatch } = useContext(AppContext);

  useEffect(() => {
    const onMount = async () => {
      const game = await fetchGame();
      dispatch({ type: ActionType.UPDATE_GAME, game });
    };
    onMount();
  }, [dispatch]);

  let statusText: string;
  if (!game) {
    statusText = "New Game";
  } else if (game.solved.length < game.cardCount) {
    statusText = "Solve #" + (game.solved.length + 1);
  } else {
    statusText = "Finished";
  }

  return (
    <MyNav>
      <NavTitle to="/">mimir</NavTitle>
      <StatusPill to="/">{statusText}</StatusPill>
      <ManageLink to="/cards">Manage Cards</ManageLink>
    </MyNav>
  );
};

const MyNav = styled.nav`
  top: 0;
  width: 100%;
  background-color: #5b42f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled(Link)`
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: white;
  text-decoration: none;
  width: 180px;
`;

const StatusPill = styled(Link)`
  background-color: #3d28c5;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 12px 28px;
  text-align: center;
  text-decoration: none;
`;

const ManageLink = styled(Link)`
  padding: 20px;
  color: #eee;
  text-decoration: none;
  text-align: right;
  width: 180px;
  font-weight: 600;

  &:hover {
    color: #fff;
  }
`;
