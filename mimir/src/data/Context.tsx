import { Action } from "models/Action";
import { CardsState, initialCardsState } from "models/CardState";
import { createContext, ReactNode, useReducer } from "react";
import { cardReducer } from "reducers/cardReducer";

interface AppState extends CardsState {
  dispatch: (action: Action) => void;
}

const initialState: AppState = {
  ...initialCardsState,
  dispatch: (action: Action) => {},
};

export const AppContext = createContext(initialState);

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  const store = {
    ...state,
    dispatch,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
