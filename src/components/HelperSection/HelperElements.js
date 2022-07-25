import styled from "styled-components";

export const HelperContainer = styled.div`
  margin: 42px auto;
  padding: 0 40px;
  max-width: var(--max-width-container);
`;

export const HelperTitle = styled.h1`
  font-size: 40px;
  font-family: var(--font-secondary);
  width: 50%;

  @media screen and (max-width: 992px) {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HelperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HelperLine = styled.div`
  border-top: 1px solid var(--light-grey);
  width: 30%;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const HelperBtnWrapper = styled.div`
  display: inline-block;

  @media screen and (max-width: 992px) {
    margin-top: 25px;
  }
`;
