import { AppContext } from "data/Context";
import { useContext } from "react";
import { GameActive } from "./GameActive";
import { GameFinished } from "./GameFinished";
import { GameIdle } from "./GameIdle";

export const Home = () => {
  const { game } = useContext(AppContext);

  if (!game) {
    return <GameIdle />;
  }
  if (game.cardCount === game.solved.length) {
    return <GameFinished />;
  }
  return <GameActive />;
};
