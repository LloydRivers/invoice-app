import { useState } from "react";
import { Header, InvoiceRow } from "Components";
import themeSlice from "features/slices/themeSlice/themeSlice";
import { NewFormModal } from "Components";
import { ReactComponent as ArrowRight } from "../../Assets/icon-arrow-right.svg";
import { StyledHero, HeroContentContainer } from "./Hero.styled";
const Hero: React.FC = () => {
  const [isMenuActive, activeMenu] = useState(false);

  console.log(isMenuActive);

  return (
    <StyledHero>
      {isMenuActive && (
        <NewFormModal isMenuActive={isMenuActive} activeMenu={activeMenu} />
      )}
      <HeroContentContainer>
        <Header isMenuActive={isMenuActive} activeMenu={activeMenu} />
        <InvoiceRow
          invoice={{
            id: 1,
            clientName: "Richard Watts",
            total: "$6,000.00",
            status: "Paid",
            dueDate: "12/12/2021",
          }}
        />
        <InvoiceRow
          invoice={{
            id: 1,
            clientName: "Richard Watts",
            total: "$6,000.00",
            status: "Paid",
            dueDate: "12/12/2021",
          }}
        />
        <InvoiceRow
          invoice={{
            id: 1,
            clientName: "Richard Watts",
            total: "$6,000.00",
            status: "Paid",
            dueDate: "12/12/2021",
          }}
        />
      </HeroContentContainer>
    </StyledHero>
  );
};

export default Hero;
