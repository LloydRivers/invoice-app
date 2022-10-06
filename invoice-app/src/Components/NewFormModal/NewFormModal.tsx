import "./new-modal.css";
import { NewInvoice } from "Components";

interface NewFormModalProps {
  isMenuActive: boolean;
  activeMenu: (isMenuActive: boolean) => void;
}

const NewFormModal: React.FC<NewFormModalProps> = ({
  isMenuActive,
  activeMenu,
}): JSX.Element => {
  console.log(isMenuActive);
  return (
    <aside className="side-menu">
      <div
        className="side-menu__overlay"
        onClick={() => activeMenu(!isMenuActive)}
      />
      <div style={{ border: "5px solid red" }} className="side-menu__content">
        <NewInvoice />
      </div>
    </aside>
  );
};

export default NewFormModal;
