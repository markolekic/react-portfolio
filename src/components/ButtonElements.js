import styled, { css } from "styled-components";
import { Link } from "react-scroll";

const sharedStyle = css`
  display: inline-block;
  background-color: ${({ primary }) => (primary ? "transparent" : "var(--indigo)")};
  white-space: nowrap;
  padding: 8px 20px;
  color: ${({ dark }) => (dark ? "var(--black)" : "var(--white)")};
  font-size: 12px;
  font-family: var(--font-primary);
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  text-decoration: none;
  border: 1px solid var(--black);
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? "var(--indigo)" : "transparent")};
    color: ${({ dark }) => (dark ? "var(--white)" : "var(--black)")};
  }
`;

export const ButtonLink = styled.a`
  ${sharedStyle}
`;

export const ButtonScroll = styled(Link)`
  ${sharedStyle}
`;

export const Button = styled.button`
  ${sharedStyle}

  :disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: #e2e2e2;
    border-color: #e2e2e2;
    color: #fff;
  }
`;
