import { useState } from "react";
import {
  FormContainer,
  Form,
  FormHeader,
  FormInput,
  FormTitle,
  InputContainer,
  FormLabel,
  SectionTitle,
  Option,
  ButtonContainer,
  Button,
  FormSelect,
  ThreeColumnContainer,
  TwoColumnContainer,
  FiveColumnContainer,
} from "./NewInvoice.styled";

import { addInvoice } from "features/slices/invoice/invoiceSlice";

import { ReactComponent as DeleteIcon } from "../../../Assets/icon-delete.svg";
import { useDispatch } from "react-redux";
const NewInvoice: React.FC = () => {
  const [formData, setFormData] = useState({
    senderAddress: "",
    senderCity: "",
    senderPostCode: "",
    senderCountry: "",
    clientsName: "",
    clientsEmail: "",
    clientsAddress: "",
    clientsCity: "",
    clientsPostCode: "",
    clientsCountry: "",
    invoiceDate: "",
    paymentTerms: "",
    projectDescription: "",
    itemName: "",
    quantity: "",
    price: "",
    total: "",
  });
  const dispatch = useDispatch();
  const {
    senderAddress,
    senderCity,
    senderPostCode,
    senderCountry,
    clientsName,
    clientsEmail,
    clientsAddress,
    clientsCity,
    clientsPostCode,
    clientsCountry,
    invoiceDate,
    paymentTerms,
    projectDescription,
    itemName,
    quantity,
    price,
    total,
  } = formData;
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    dispatch(addInvoice(formData));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Form>
        <FormHeader>
          <FormTitle>New Invoice</FormTitle>
        </FormHeader>

        <SectionTitle>Bill From</SectionTitle>

        <InputContainer>
          <FormLabel>Street Address</FormLabel>
          <FormInput
            onChange={(e) =>
              setFormData({ ...formData, senderAddress: e.target.value })
            }
            value={senderAddress}
            type="text"
          />
        </InputContainer>

        <ThreeColumnContainer>
          <div>
            <FormLabel>City</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, senderCity: e.target.value })
              }
              value={senderCity}
              type="text"
            />
          </div>
          <div>
            <FormLabel>Postcode</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, senderPostCode: e.target.value })
              }
              value={senderPostCode}
              type="text"
            />
          </div>
          <div>
            <FormLabel>Country</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, senderCountry: e.target.value })
              }
              value={senderCountry}
              type="text"
            />
          </div>
        </ThreeColumnContainer>

        <SectionTitle>Bill To</SectionTitle>

        <InputContainer>
          <FormLabel>Client's name</FormLabel>
          <FormInput
            onChange={(e) =>
              setFormData({ ...formData, clientsName: e.target.value })
            }
            value={clientsName}
            type="text"
          />
        </InputContainer>

        <InputContainer>
          <FormLabel>Client's Email</FormLabel>
          <FormInput
            onChange={(e) =>
              setFormData({ ...formData, clientsEmail: e.target.value })
            }
            value={clientsEmail}
            type="text"
          />
        </InputContainer>

        <InputContainer>
          <FormLabel>Street Address</FormLabel>
          <FormInput
            onChange={(e) =>
              setFormData({ ...formData, clientsAddress: e.target.value })
            }
            value={clientsAddress}
            type="text"
          />
        </InputContainer>

        <ThreeColumnContainer>
          <div>
            <FormLabel>City</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, clientsCity: e.target.value })
              }
              value={clientsCity}
              type="text"
            />
          </div>
          <div>
            <FormLabel>Postcode</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, clientsPostCode: e.target.value })
              }
              value={clientsPostCode}
              type="text"
            />
          </div>
          <div>
            <FormLabel>Country</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, clientsCountry: e.target.value })
              }
              value={clientsCountry}
              type="text"
            />
          </div>
        </ThreeColumnContainer>

        <TwoColumnContainer>
          <div>
            <FormLabel>Invoice Date</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, invoiceDate: e.target.value })
              }
              value={invoiceDate}
              type="date"
            />
          </div>
          <div>
            <FormLabel>Payment Terms</FormLabel>
            <FormSelect
              onChange={(e) =>
                setFormData({ ...formData, paymentTerms: e.target.value })
              }
              value={paymentTerms}
            >
              <Option>Select Terms</Option>
              <Option>Net 1 Day</Option>
              <Option>Net 7 Days</Option>
              <Option>Net 14 Days</Option>
              <Option>Net 30 Days</Option>
            </FormSelect>
          </div>
        </TwoColumnContainer>

        <InputContainer>
          <FormLabel>Project Description</FormLabel>
          <FormInput
            onChange={(e) =>
              setFormData({ ...formData, projectDescription: e.target.value })
            }
            value={projectDescription}
            type="text"
          />
        </InputContainer>

        <FiveColumnContainer>
          <div>
            <FormLabel>Item Name</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, itemName: e.target.value })
              }
              value={itemName}
              type="text"
            />
          </div>
          <div>
            <FormLabel>Quantity</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              value={quantity}
              type="text"
            />
          </div>
          <div>
            <FormLabel>Price</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              value={price}
              type="text"
            />
          </div>
          <div>
            <FormLabel>Total</FormLabel>
            <FormInput
              onChange={(e) =>
                setFormData({ ...formData, total: e.target.value })
              }
              value={total}
              type="text"
            />
          </div>

          <DeleteIcon />
        </FiveColumnContainer>
        <div>
          <Button type="button" width="100%" inputBorder={true} color="#7E88C3">
            Add new item
          </Button>
        </div>

        <ButtonContainer>
          <div>
            <Button padding={true} color="#7E88C3" inputBorder={true}>
              Discard
            </Button>
          </div>
          <div>
            <Button padding={true} sideBar={true} color="#888EB0">
              Save as Draft
            </Button>
            <Button type="submit" padding={true} color="#fff" buttonBG={true}>
              Save & Send
            </Button>
          </div>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default NewInvoice;
