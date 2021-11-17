import styled from 'styled-components'

export const CustomBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f8fafc')};
`
export const CustomContainer2 = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f1f1f1')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 42px;
  }
`
export const Image = styled.img`
  width: 300px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const Heading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkMode ? '#f8fafc' : '#0f0f0f')};
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`
export const Description = styled.p`
  color: #94a3b8;
  font-size: 14px;
  font-family: 'Roboto';
  text-align: center;
  width: 250px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`
export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const SideBar = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  margin: 0;
  @media screen and (min-width: 768px) {
    height: 120vh;
    display: flex;
  }
`
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ContactHeading = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-bottom: 20px;
`
export const LogosContainer = styled.div`
  display: flex;
`

export const SocialMediaLogo = styled.img`
  height: 30px;
  margin-right: 10px;
`

export const ContactDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  width: 200px;
`
