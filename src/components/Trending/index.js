import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

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
  LoaderContainer,
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
  RetryButton,
  VideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachOne => ({
        id: eachOne.id,
        publishedAt: eachOne.published_at,
        thumbnailUrl: eachOne.thumbnail_url,
        title: eachOne.title,
        viewCount: eachOne.view_count,
        channel: {
          name: eachOne.channel.name,
          profileImageUrl: eachOne.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderContactsSection = () => (
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

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureContainer>
            <FailureImage
              src={
                isDarkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <FailureHeading isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    console.log(trendingVideos)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <>
              {this.renderBannerSection()}
              <VideosContainer isDarkMode={isDarkMode}>
                {trendingVideos.map(eachOne => (
                  <TrendingVideo videoDetails={eachOne} key={eachOne.id} />
                ))}
              </VideosContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderBannerSection = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <BannerContainer isDarkMode={isDarkMode} data-testid="banner">
            <IconContainer isDarkMode={isDarkMode}>
              <HiFire size={30} color=" #ff0000" />
            </IconContainer>
            <BannerHeading isDarkMode={isDarkMode}>Trending</BannerHeading>
          </BannerContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <CustomBgContainer isDarkMode={isDarkMode} data-testid="trending">
              <Header />
              <CustomContainer isDarkMode={isDarkMode}>
                <SideBar isDarkMode={isDarkMode}>
                  <Filters />
                  {this.renderContactsSection()}
                </SideBar>
                <CustomContainer2>{this.renderApiStatus()}</CustomContainer2>
              </CustomContainer>
            </CustomBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
