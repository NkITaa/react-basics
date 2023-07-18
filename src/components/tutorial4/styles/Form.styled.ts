import styled from "styled-components";

interface FormProps {
  bg: string;
}

export const Form = styled.form<FormProps>`
  background-color: ${(props) => props.bg};
  color: ${({ theme }) => theme.colors.primary}})};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
`;
