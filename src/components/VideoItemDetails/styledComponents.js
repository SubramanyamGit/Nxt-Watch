import styled from 'styled-components'

export const CustomBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
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
    min-height: 120vh;
    display: flex;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
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
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : ' #f9f9f9')};
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

export const SuccessViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f8fafc')};
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`

export const VideoContainerSmall = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoContainerLarge = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  flex-direction: column;

  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 2px #64748b;
`

export const Title = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
  font-size: 16px;
  font-family: 'Roboto';
  margin-top: 5px;
`
export const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 10px;
`
export const ListItem = styled.p`
  color: #64748b;
  font-size: 14px;
  font-family: 'Roboto';
  list-style-type: disc;
  margin: 10px;
`
export const List2Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0px;
  margin-bottom: 20px;
  margin-top: 10px;
`

export const List2Item = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-left: 0px;
`
export const ReactionButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
`
export const SavedButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 100px;
`

export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-left: 5px;
  cursor: pointer;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const ChannelImageAndNameContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelImage = styled.img`
  height: 50px;
  margin-right: 20px;
`
export const ChannelDetailsList = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
  font-size: 12px;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const ChannelSubscribers = styled.p`
  color: #64748b;
  font-size: 12px;
  font-family: 'Roboto';
  margin-top: 0;
`
export const Description = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
  font-size: 12px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding-left: 70px;
  }
`
