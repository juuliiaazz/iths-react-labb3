import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border: 0rem;
  border-radius: 1rem;
  height: 100%;
  width: 90vw;
  max-width: 80rem;
  margin: 20px auto auto;
  margin-bottom: 20px;
  background-color: #fff;
  overflow-x: hidden;
  box-shadow: 0 1.2rem 2.4rem var(--color-medium-200);

  @media screen and (max-width: 500px) {
    width: 100vw;
    margin: 5px auto auto;
  }
`;

export const HomeDiv = styled.div`
  height: 60rem;
`;

export const Title = styled.h1`
  padding: 20px;
  padding-top: 40px;
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  padding: 5px;
`;
