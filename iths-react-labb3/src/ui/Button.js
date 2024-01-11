import styled from "styled-components";

export const Button = styled.button`
  ${(props) =>
    props.type === "button" &&
    `
  display: inline-block;
  padding: 8px 18px;
  margin: 0 10px 10px 0;
  background: var(--color-medium);
  color: #000;
  text-decoration: none;
  width: fit-content;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  float: left;
  margin-left: 30px;

  i {
    font-size: 20px;
    margin-right: 0px;

    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
  `}

  ${(props) =>
    props.type === "back" &&
    `
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 4.2rem;
    width: 4.2rem;
    border-radius: 50%;
    border: none;
    background-color: var(--color-medium);
    color: #000;
    cursor: pointer;
    z-index: 999;
  
    `}

  ${(props) =>
    props.type === "home" &&
    `
      display: inline-block;
  padding: 8px 18px;
  margin: 10px;
  background: var(--color-medium);
  color: #000;
  text-decoration: none;
  width: fit-content;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  

  i {
    font-size: 20px;
    margin-right: 0px;

    @media (max-width: 500px) {
      font-size: 16px;
    }
    
      `}
`;
