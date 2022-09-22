import { Row, Column, HashSymbol } from "Components/Hero/Hero.styled";

import { ReactComponent as ArrowRight } from "../../Assets/icon-arrow-right.svg";

interface InvoiceRowProps {
  invoice: {
    id: number;
    clientName: string;
    total: string;
    status: string;
    dueDate: string;
  };
}

const InvoiceRow: React.FC<InvoiceRowProps> = ({ invoice }) => {
  return (
    <>
      <Row>
        <Column bold={true} color={"textDark"}>
          <HashSymbol>#</HashSymbol>
          RT3080
        </Column>
        <Column bold={false} color={"date"}>
          {invoice.dueDate}
        </Column>
        <Column bold={false} color={"name"}>
          {invoice.clientName}
        </Column>
        <Column bold={true} color={"amount"}>
          {invoice.total}
        </Column>
        <Column bold={true} color={"textGreen"}>
          {invoice.status}
        </Column>
        <Column bold={true} color={"textGreen"}>
          <ArrowRight />
        </Column>
      </Row>
    </>
  );
};

export default InvoiceRow;
