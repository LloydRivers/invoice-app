import { Header } from "Components";
import { StyledHero, HeroContentContainer, Row, Column } from "./Hero.styled";
const Hero = () => {
  return (
    <StyledHero>
      <Header />
      <HeroContentContainer>
        <Row>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </Row>
      </HeroContentContainer>
    </StyledHero>
  );
};

export default Hero;
