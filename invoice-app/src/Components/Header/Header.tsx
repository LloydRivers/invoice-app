import {
  StyledHeader,
  ContentContainer,
  StyledDropDown,
  Title,
  Description,
  StyledButton,
  FilterBy,
} from "./Header.styled";

import { ReactComponent as ArrowDown } from "../../Assets/icon-arrow-down.svg";
const Header = () => {
  return (
    <StyledHeader>
      <ContentContainer>
        <Title>Invoices</Title>
        <Description>No invoice...</Description>
      </ContentContainer>
      <StyledDropDown>
        <FilterBy>Filter by status</FilterBy>
        <ArrowDown />
      </StyledDropDown>
      <ContentContainer>
        <StyledButton>New Invoice</StyledButton>
      </ContentContainer>
    </StyledHeader>
  );
};

export default Header;
