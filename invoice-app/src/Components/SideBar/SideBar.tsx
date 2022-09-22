import {
  StyledSideBar,
  SVGContainer,
  IconContainer,
  ImageContainer,
  StyledImage,
} from "./SideBar.styled";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { ReactComponent as Moon } from "../../Assets/icon-moon.svg";
import ImageAvatar from "../../Assets/image-avatar.jpg";

const SideBar = () => {
  return (
    <StyledSideBar>
      <SVGContainer>
        <Logo />
      </SVGContainer>

      <IconContainer>
        <div>
          <Moon />
        </div>

        <ImageContainer>
          <StyledImage src={ImageAvatar} alt="" />
        </ImageContainer>
      </IconContainer>
    </StyledSideBar>
  );
};

export default SideBar;
