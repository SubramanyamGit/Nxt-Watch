import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Filters from '../Filters'

import {
  CustomBgContainer,
  CustomContainer2,
  Image,
  Heading,
  Description,
  CustomContainer,
  SideBar,
  ContactsContainer,
  ContactHeading,
  LogosContainer,
  SocialMediaLogo,
  ContactDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value

      const renderContactsSection = () => (
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

      return (
        <CustomBgContainer isDarkMode={isDarkMode}>
          <Header />
          <CustomContainer isDarkMode={isDarkMode}>
            <SideBar isDarkMode={isDarkMode}>
              <Filters />
              {renderContactsSection()}
            </SideBar>
            <CustomContainer2 isDarkMode={isDarkMode}>
              {' '}
              <Image
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <Heading isDarkMode={isDarkMode}>Page Not Found</Heading>
              <Description>
                we are sorry, the page you requested could not be found
              </Description>
            </CustomContainer2>
          </CustomContainer>
        </CustomBgContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
