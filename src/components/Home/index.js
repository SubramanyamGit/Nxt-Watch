import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {IoMdClose, IoIosSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import Video from '../Video'
import Filters from '../Filters'

import {
  CustomBgContainer,
  CustomContainer,
  CustomContainer2,
  BannerContainer,
  BannerLogo,
  BannerCloseButton,
  BannerDescription,
  GetItButton,
  CustomContainer3,
  SearchInputContainer,
  Input,
  SearchButton,
  LoaderContainer,
  VideosContainer,
  SideBar,
  ContactsContainer,
  ContactHeading,
  LogosContainer,
  SocialMediaLogo,
  ContactDescription,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInputEntered: '',
    searchInput: '',
    closeBanner: false,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
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
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getVideosList()
  }

  onSearchInput = () => {
    const {searchInputEntered} = this.state
    this.setState({searchInput: searchInputEntered}, this.getVideosList)
  }

  onInputChange = event => {
    this.setState({searchInputEntered: event.target.value})
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
              alt="failure view"
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

  noVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading isDarkMode={isDarkMode}>
              No Search results found
            </FailureHeading>
            <FailureDescription>
              Try different key words or remove search filter
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
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.noVideosView()
    }
    return (
      <VideosContainer>
        {videosList.map(eachOne => (
          <Video key={eachOne.id} videoDetails={eachOne} />
        ))}
      </VideosContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

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

  renderSearchInput = isDarkMode => {
    const {searchInputEntered} = this.state
    return (
      <SearchInputContainer>
        <Input
          type="search"
          isDarkMode={isDarkMode}
          placeholder="Search"
          value={searchInputEntered}
          onChange={this.onInputChange}
        />
        <SearchButton
          isDarkMode={isDarkMode}
          onClick={this.onSearchInput}
          data-testid="searchButton"
        >
          <IoIosSearch size={20} color=" #616e7c" />
        </SearchButton>
      </SearchInputContainer>
    )
  }

  BannerButton = () => {
    this.setState({closeBanner: true})
  }

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerCloseButton
        data-testid="close"
        type="button"
        onClick={this.BannerButton}
      >
        <IoMdClose size={20} />
      </BannerCloseButton>
      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerDescription>
      <GetItButton>GET IT NOW</GetItButton>
    </BannerContainer>
  )

  render() {
    const {closeBanner} = this.state
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <CustomBgContainer data-testid="home" isDarkMode={isDarkMode}>
              <Header />
              <CustomContainer isDarkMode={isDarkMode}>
                <SideBar isDarkMode={isDarkMode}>
                  <Filters />
                  {this.renderContactsSection()}
                </SideBar>
                <CustomContainer2>
                  {closeBanner ? null : this.renderBanner()}
                  <CustomContainer3 isDarkMode={isDarkMode}>
                    {this.renderSearchInput(isDarkMode)}
                    {this.renderApiStatus()}
                  </CustomContainer3>
                </CustomContainer2>
              </CustomContainer>
            </CustomBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
