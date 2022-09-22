import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4em 0;
`;

export const ContentContainer = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textDark};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.font700};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.subHeading};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.font500};
`;

export const StyledDropDown = styled.div`
  color: ${({ theme }) => theme.textDark};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.font700};
  display: flex;
  align-items: center;

  svg {
    margin: 0 15px 0 5px;
  }
`;

export const OptionsList = styled.ul``;

export const FilterBy = styled.span``;

export const Option = styled.li``;

export const PlusIconContainer = styled.div`
  background-color: #fff;
  border-radius: 50%;
  height: 22px;
  width: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBG};
  font-weight: ${({ theme }) => theme.font700};
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  width: 120px;
  height: 40px;

  path {
    fill: ${({ theme }) => theme.buttonBG};
  }
`;
