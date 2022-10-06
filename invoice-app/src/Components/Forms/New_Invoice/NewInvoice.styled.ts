import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 0 240px;
  background-color: ${(props) => props.theme.heroBG};
  margin: 0 auto;
`;
export const Form = styled.form`
  border: 2px solid red;
  padding: 56px;
`;
export const FormTitle = styled.h1`
  color: ${(props) => props.theme.textDark};
  margin-bottom: 1.5rem;
`;
export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.buttonBG};
  font-size: 12px;
  margin-bottom: 24px;
`;
export const FormHeader = styled.div``;

export const FormLabel = styled.label`
  display: block;
  color: ${(props) => props.theme.hash};
  font-weight: ${(props) => props.theme.font500};
  font-size: 12px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  cursor: pointer;
  font-weight: ${(props) => props.theme.font700};
  &::placeholder {
    color: ${(props) => props.theme.placeHolder};
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.buttonBG};
  }

  color: ${(props) => props.theme.textDark};
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 10px 5px;
  width: 100%;
`;

export const InputContainer = styled.div`
  min-width: 100%;
`;

export const FormSelect = styled.select`
  cursor: pointer;
  font-weight: ${(props) => props.theme.font700};
  &::placeholder {
    color: ${(props) => props.theme.placeHolder};
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.buttonBG};
  }

  color: ${(props) => props.theme.textDark};
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 10px 5px;
  width: 100%;
`;

export const Option = styled.option`
  // change option background color and on hover color
  background-color: ${(props) => props.theme.rowBG};
  color: ${(props) => props.theme.textDark};
  &:hover {
    background-color: ${(props) => props.theme.buttonBG};
  }
`;
export const ThreeColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  div {
    width: 30%;
  }
`;

export const TwoColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  div {
    width: 48%;
  }
`;

export const FiveColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;

  div {
    width: 18%;
  }
`;
interface ButtonProps {
  color?: string;
  width?: string;
  margin?: string;
  buttonBG?: boolean;
  sideBar?: boolean;
  inputBorder?: boolean;
  padding?: boolean;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  color: ${(props) => props.color && props.color};
  background-color: ${(props) =>
    props.buttonBG
      ? props.theme.buttonBG
      : props.sideBar
      ? props.theme.sideBar
      : props.inputBorder
      ? props.theme.inputBorder
      : props.theme.buttonBG};
  border: none;
  border-radius: 24px;
  padding: 1em 1.5em;
  width: ${(props) => props.width && props.width};
  font-weight: 700;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  div:nth-child(2) {
    button:first-child {
      margin-right: 0.5em;
    }
  }
`;
