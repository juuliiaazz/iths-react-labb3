import styled from "styled-components";

export const MealLists = styled.li`
  font-size: 1.6rem;
  position: relative;
  align-items: center;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;
  background-color: #fff;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
  padding: 1.6rem 3.2rem;
  width: 90vw;
  max-width: 50rem;

  &:hover {
    background-color: var(--color-light);
  }
`;

export const ListImage = styled.img`
  width: 200%;
  grid-row: 1 / -1;
  border-radius: 1rem;
`;

export const ListTitle = styled.h3`
  font-size: 1.8rem;
  text-align: left;
  padding-left: 4rem;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
