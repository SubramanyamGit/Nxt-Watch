import styled from 'styled-components'

export const CustomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
export const Form = styled.form`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  padding: 35px 15px 35px 15px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  width: 330px;
  padding-bottom: 40px;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 380px;
    padding: 42px;
  }
`

export const Logo = styled.img`
  width: 130px;
  align-self: center;
  margin-bottom: 40px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`
export const Label = styled.label`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#94a3b8')};
  font-size: 12px;
  line-height: 16px;
  font-family: 'Roboto';
  margin-bottom: 5px;
  font-weight: bold;
`
export const Input = styled.input`
  font-size: 13px;
  border: 1px solid #475569;
  padding: 10px 16px 10px 16px;
  border-radius: 2px;
  outline: none;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 7px;
`
export const Label2 = styled.label`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#94a3b8')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  line-height: 2.5;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto';
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: 'Roboto';
  margin: 0;
`
