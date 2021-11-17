import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import Filters from '../Filters'
import TrendingVideo from '../TrendingVideo'

import {
  CustomBgContainer,
  BannerContainer,
  IconContainer,
  BannerHeading,
  CustomContainer,
  SideBar,
  ContactsContainer,
  ContactHeading,
  LogosContainer,
  SocialMediaLogo,
  ContactDescription,
  CustomContainer2,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  VideosContainer,
} from './styledComponents'

const SavedVideos = () => {
  const renderContactsSection = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <ContactsContainer>
            <ContactHeading isDarkMode={isDarkMode}>CONTACT US</ContactHeading>
            <LogosContainer>
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </LogosContainer>
            <ContactDescription isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureHeading isDarkMode={isDarkMode}>
              No saved videos found
            </FailureHeading>
            <FailureDescription>
              You can save your videos while watching them
            </FailureDescription>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderBannerSection = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <BannerContainer isDarkMode={isDarkMode} data-testid="banner">
            <IconContainer isDarkMode={isDarkMode}>
              <HiFire size={30} color=" #ff0000" />
            </IconContainer>
            <BannerHeading isDarkMode={isDarkMode}>Saved Videos</BannerHeading>
          </BannerContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode, savedList} = value

        return (
          <>
            {renderBannerSection()}
            <VideosContainer isDarkMode={isDarkMode}>
              {savedList.map(eachOne => (
                <TrendingVideo videoDetails={eachOne} key={eachOne.id} />
              ))}
            </VideosContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode, savedList} = value

        return (
          <CustomBgContainer isDarkMode={isDarkMode} data-testid="savedVideos">
            <Header />
            <CustomContainer isDarkMode={isDarkMode}>
              <SideBar isDarkMode={isDarkMode}>
                <Filters />
                {renderContactsSection()}
              </SideBar>
              <CustomContainer2>
                {savedList.length > 0
                  ? renderSuccessView()
                  : renderFailureView()}
              </CustomContainer2>
            </CustomContainer>
          </CustomBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
