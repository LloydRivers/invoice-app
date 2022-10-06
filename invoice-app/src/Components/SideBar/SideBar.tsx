import {
  StyledSideBar,
  SVGContainer,
  IconContainer,
  ImageContainer,
  StyledImage,
} from "./SideBar.styled";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { ReactComponent as Moon } from "../../Assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../Assets/icon-sun.svg";
import ImageAvatar from "../../Assets/image-avatar.jpg";
import {
  selectIsLightTheme,
  toggleTheme,
} from "../../features/slices/themeSlice/themeSlice";
import { useSelector, useDispatch } from "react-redux";

const SideBar: React.FC = () => {
  const isLightTheme = useSelector(selectIsLightTheme);
  const dispatch = useDispatch();
  return (
    <StyledSideBar>
      <SVGContainer>
        <Logo />
      </SVGContainer>

      <IconContainer>
        <div>
          {isLightTheme ? (
            <Moon onClick={() => dispatch(toggleTheme())} />
          ) : (
            <Sun onClick={() => dispatch(toggleTheme())} />
          )}
        </div>

        <ImageContainer>
          <StyledImage src={ImageAvatar} alt="" />
        </ImageContainer>
      </IconContainer>
    </StyledSideBar>
  );
};

export default SideBar;
