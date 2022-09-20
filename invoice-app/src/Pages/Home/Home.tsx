import { Hero, SideBar } from "Components";
import { StyledHome } from "./Home.styled";
const Home = () => {
  return (
    <StyledHome>
      <SideBar />
      <Hero />
    </StyledHome>
  );
};

export default Home;
