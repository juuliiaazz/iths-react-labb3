import styled from "styled-components";
import Link from "next/link";

export const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.5rem;
  padding: 0 3.2rem;
  border-bottom-left-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
  max-width: 2000px;
  overflow-y: no-scroll;

  @media (max-width: 400px) {
    width: 105vw;
    min-width: 300px;
    grid-template-columns: 60px 1fr 1fr;
  }

  background-color: var(--color-medium-200);
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    float: left;
    top: 0px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const MenuLists = styled.div`
  ${(props) =>
    props.type === "nav-menu" &&
    `
    display: grid;
    grid-template-columns: 100px 1fr 1fr;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: start;

    @media screen and (max-width: 960px) {
      display: flex;
    flex-direction: column;
    width: 100%;
    height: 20rem;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    }

    
  `}

  ${(props) =>
    props.type === "nav-menu-active" &&
    `
    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 20rem;
      position: absolute;
      top: 80px;

      background: var(--color-medium);
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
   
    `}
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-family: "Open Sans";
  font-weight: 500;

  &:hover {
    border-radius: 4px;
    transition: all 0.2s ease-out;
    background-color: var(--color-light);
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      background-color: var(--color-light);
      border-radius: 0;
    }
  }
`;
