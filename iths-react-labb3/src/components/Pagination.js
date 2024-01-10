import styled from "styled-components";

// en komponent från ett av mina andra projekt

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--projects);
  padding-bottom: 3rem;
`;

const PageButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isactive ? "var(--color-special)" : "var(--color-medium)"};
  color: #000;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 440px) {
    width: 30px;
    height: 30px;
    margin: 5px;
  }
`;

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Center>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            isactive={currentPage === pageNumber}
          >
            {pageNumber}
          </PageButton>
        )
      )}
    </Center>
  );
};
