import {
  StyledHeader,
  ContentContainer,
  StyledDropDown,
  Title,
  Description,
  StyledButton,
  FilterBy,
  PlusIconContainer,
} from "./Header.styled";

import { ReactComponent as ArrowDown } from "../../Assets/icon-arrow-down.svg";
import { ReactComponent as IconPlus } from "../../Assets/icon-plus.svg";

interface HeaderProps {
  isMenuActive: boolean;
  activeMenu: (isMenuActive: boolean) => void;
}
const Header: React.FC<HeaderProps> = ({
  isMenuActive,
  activeMenu,
}): JSX.Element => {
  return (
    <StyledHeader>
      <ContentContainer>
        <Title>Invoices</Title>
        <Description>No invoice...</Description>
      </ContentContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StyledDropDown>
          <FilterBy>Filter by status</FilterBy>
          <ArrowDown />
        </StyledDropDown>
        <ContentContainer>
          <StyledButton>
            <PlusIconContainer>
              <IconPlus />
            </PlusIconContainer>

            <span
              onClick={() => activeMenu(!isMenuActive)}
              style={{ padding: "0 5px" }}
            >
              New Invoice
            </span>
          </StyledButton>
        </ContentContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
