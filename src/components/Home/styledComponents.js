import styled from 'styled-components'

export const CustomBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f8fafc')};
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
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

export const CustomContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  flex-direction: column;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 20px 20px 30px 30px;
  @media screen and (min-width: 768px) {
    padding-top: 0px;
    height: 250px;
  }
`

export const BannerLogo = styled.img`
  height: 35px;
  width: 150px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`
export const BannerDescription = styled.p`
  color: #231f20;
  font-size: 18px;
  font-family: 'Roboto';
  width: 250px;
  line-height: 2;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const GetItButton = styled.button`
  background-color: transparent;
  line-height: 2;
  color: #231f20;
  border: 1px solid #231f20;
  padding-left: 20px;
  padding-right: 20px;
  align-self: flex-start;
  font-weight: 500;
  font-size: 17px;
  font-family: 'Roboto';
`
export const CustomContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const SearchInputContainer = styled.div`
  display: flex;
  border: 1px solid #616e7c;
  margin: 20px;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-right: 1px solid #616e7c;
  padding: 6px;
  width: 80%;
  outline: none;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
  font-size: 15px;
  font-family: 'Roboto';
`
export const SearchButton = styled.button`
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f1f1f1')};
  border: none;
  width: 20%;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const VideosContainer = styled.ul`
  margin: 0;
  padding: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    padding: 20px;
    flex-direction: row;
    flex-wrap: wrap;
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
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 42px;
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
