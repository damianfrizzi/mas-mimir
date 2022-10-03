import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const TableHeader = styled.th`
  text-align: left;
  padding: 8px 30px 8px 0;
`
export const TableData = styled.td`
  text-align: left;
  padding: 8px 30px 8px 0;
`

export interface FlexProps {
    center?: Boolean
}

export const FlexVertical = styled.div`
  top: 0;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FlexHorizontal = styled.div<FlexProps>`
  top: 0;
  width: 100%;
  margin: 5px;
  display: flex;
  justify-content: ${p => p.center ? 'center' : 'space-between'};
  align-items: center;
`

const FancyButton = css`
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
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
`

export const Button = styled.button`
  ${FancyButton}
`

export const LinkButton = styled(Link)`
  ${FancyButton}
`

export const Input = styled.input`
  background: 0;
  border: solid 3px lightgray;
  border-radius: 8px;
  width: 40%;
  padding: 5px 5px;
  outline: none;
  font-size: 1.2em;
  &:focus {
    border: solid 3px #00DDEB;
  }
`
