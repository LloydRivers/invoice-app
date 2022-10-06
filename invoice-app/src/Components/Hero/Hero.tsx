import { Header, InvoiceRow } from "Components";
import themeSlice from "features/slices/themeSlice/themeSlice";

import { ReactComponent as ArrowRight } from "../../Assets/icon-arrow-right.svg";
import { StyledHero, HeroContentContainer } from "./Hero.styled";
const Hero: React.FC = () => {
  return (
    <StyledHero>
      <HeroContentContainer>
        <Header />
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
