import styled from "styled-components";

export const DetailsMealContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 100rem;
  margin-top: 20px;
  background-color: #fff;
`;
export const DetailsMealNav = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;
export const ImageMealBox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100rem;
  justify-content: center;
`;

export const ImageMeal = styled.img`
  border-radius: 4rem;
  width: 90vw;
  max-width: 100%;

  @media (max-width: 680px) {
    max-width: 40rem;
  }
`;
export const InfoMealCard = styled.div`
  position: relative;
  flex: 1;
  max-width: 30rem;
  height: auto;
  min-height: 45rem;

  margin-right: 50px;
  padding-top: 30px;

  @media (max-width: 800px) {
    max-width: 25rem;
  }

  @media (max-width: 680px) {
    flex: 100%;
    max-width: 80rem;
    margin-right: 0rem;
    min-height: 30rem;
  }

  @media (max-width: 400px) {
    max-width: 60rem;
  }
`;

export const IngredientsBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0rem;
  min-height: 25rem;

  @media (max-width: 680px) {
  }
`;
export const InstructionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-light);
  width: 100vw;
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const DetailsMealTitle = styled.h1`
  font-size: 2rem;
`;

export const DetailsParagraph = styled.p`
  width: 80vw;
  max-width: 60rem;
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Tag = styled.li`
  font-size: 14px;
  font-weight: 300;
  margin: 0 0px 0px 0;

  color: #000;
  padding: 4px 8px;
  min-width: 200px;

  @media (max-width: 500px) {
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const TagList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 85%;
  justify-content: center;
  align-content: start;
  padding-top: 0px;

  @media (max-width: 680px) {
    max-width: 45%;
    padding-top: 0px;
    min-height: 32rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    flex: 100%;
    max-width: 15%;
    padding-top: 0px;
    min-height: 35rem;
  }

  @media (max-width: 300px) {
    padding-top: 0px;
  }
`;
