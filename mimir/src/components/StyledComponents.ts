import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const TableContent = css`
  text-align: left;
  padding: 8px 40px 8px 0;
`;

export const TableHeader = styled.th`
  ${TableContent}
`;

export const TableData = styled.td`
  ${TableContent}
`;

const FancyButton = css`
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 15px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 10px 15px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    outline: 0;
    opacity: 0.85;
  }
`;

export const Button = styled.button`
  ${FancyButton}
`;

export const LinkButton = styled(Link)`
  ${FancyButton}
`;

export const NarrowLinkButton = styled(LinkButton)`
  min-width: 70px;
  padding: 6px 15px;
`;

export const NarrowButton = styled(Button)`
  min-width: 70px;
  padding: 6px 15px;
`;

export const Input = styled.input`
  background: 0;
  border: solid 3px lightgray;
  border-radius: 8px;
  width: 40%;
  padding: 5px 5px;
  outline: none;
  font-size: 1.2em;
  &:focus {
    border: solid 3px #00ddeb;
  }
`;
