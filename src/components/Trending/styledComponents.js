import styled from 'styled-components'

export const CustomBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f8fafc')};
`
export const BannerContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ebebeb')};
  padding: 20px;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 30px;
    padding-left: 50px;
  }
`
export const IconContainer = styled.div`
  padding: 10px;
  border-radius: 30px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    padding: 22px 25px 22px 25px;
    border-radius: 50px;
  }
`
export const BannerHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f8fafc' : '#0f0f0f')};
  font-size: 22px;
  font-weight: bold;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ffffff')};
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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const VideosContainer = styled.ul`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding-top: 30px;
  @media screen and (min-width: 500px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 42px;
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

export const CustomContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 75vh;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`
export const FailureImage = styled.img`
  height: 150px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkMode ? ' #f8fafc' : '#1e293b')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const FailureDescription = styled.p`
  color: ${props => (props.isDarkMode ? ' #f8fafc' : '#64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 420px;
    font-size: 17px;
  }
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  line-height: 2.2;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  padding-left: 25px;
  padding-right: 25px;
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
`
