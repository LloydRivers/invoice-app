import { StyledSideBar, SVGContainer } from "./SideBar.styled";
import { ReactComponent as Logo } from "../../Assets/icons/logo.svg";

const SideBar = () => {
  return (
    <StyledSideBar>
      <SVGContainer>
        <Logo />
      </SVGContainer>
    </StyledSideBar>
  );
};

export default SideBar;
