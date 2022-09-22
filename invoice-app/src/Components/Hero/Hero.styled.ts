import styled from "styled-components";

export const StyledHero = styled.main`
  background-color: ${(props) => props.theme.heroBG};
  max-width: 1300px;
  padding: 0 255px;
`;

export const HeroContentContainer = styled.div`
  max-width: 700px;
`;

export const Row = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.rowBG};
  padding: 32px;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  margin: 16px 0;
`;

interface ColumnProps {
  color: string;
  bold: boolean;
  width?: string;
}

export const Column = styled.div<ColumnProps>`
  width: ${(props) => props.width && props.width};
  color: ${(props) => {
    switch (props.color) {
      case "textDark":
        return props.theme.textDark;
      case "date":
        return props.theme.hash;
      case "name":
        return props.theme.nameColor;
      case "amount":
        return props.theme.textDark;
      case "textGreen":
        return props.theme.textGreen;
      default:
        return props.theme.textDark;
    }
  }};
  font-weight: ${(props) =>
    props.bold ? props.theme.font700 : props.theme.font500};
`;

export const HashSymbol = styled.span`
  color: ${({ theme }) => theme.hash};
`;
