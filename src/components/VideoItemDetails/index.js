import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import {RiMenuAddFill} from 'react-icons/ri'

import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import Filters from '../Filters'

import {
  CustomBgContainer,
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
  SuccessViewContainer,
  VideoContainerSmall,
  VideoContainerLarge,
  VideoDetailsContainer,
  Title,
  ListContainer,
  ListItem,
  List2Item,
  ReactionButton,
  List2Container,
  ButtonText,
  ContentContainer,
  ChannelDetailsContainer,
  ChannelImageAndNameContainer,
  ChannelImage,
  ChannelDetailsList,
  ChannelName,
  ChannelSubscribers,
  Description,
  ListsContainer,
  SavedButton,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        id: data.video_details.id,
        description: data.video_details.description,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        publishedAt: data.video_details.published_at,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updatedData,
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

  onLike = () => {
    const {like, dislike} = this.state
    const disLikeResult = dislike === true && like === false ? false : null
    this.setState({like: !like, dislike: disLikeResult})
  }

  onDislike = () => {
    const {like, dislike} = this.state
    const likeResult = like === true && dislike === false ? false : null
    this.setState({like: likeResult, dislike: !dislike})
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <FailureContainer isDarkMode={isDarkMode}>
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

  renderSuccessView = () => {
    const {videoDetails, like, dislike} = this.state
    const {
      description,
      channel,
      publishedAt,
      viewCount,
      videoUrl,
      title,
    } = videoDetails
    const {subscriberCount, name, profileImageUrl} = channel
    const date = formatDistanceToNowStrict(new Date(publishedAt), {
      addSuffix: true,
      roundingMethod: 'floor',
    })

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkMode,
            addToSavedList,
            removeFromSavedList,
            savedList,
          } = value
          const {match} = this.props
          const {id} = match.params
          const savedVideo = savedList.filter(eachOne => eachOne.id === id)
          const saved = savedVideo.length === 1
          const savedText = saved ? 'Saved' : 'Save'
          const changeSavedVideosList = () => {
            if (!saved) {
              addToSavedList(videoDetails)
            } else {
              removeFromSavedList(videoDetails)
            }
          }
          const saveClicked = () => {
            changeSavedVideosList()
          }
          return (
            <SuccessViewContainer isDarkMode={isDarkMode}>
              <VideoContainerSmall>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  height="270px"
                  width="100%"
                />
              </VideoContainerSmall>
              <VideoContainerLarge>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  height="480px"
                  width="800px"
                />
              </VideoContainerLarge>
              <ContentContainer>
                <VideoDetailsContainer>
                  <Title isDarkMode={isDarkMode}>{title}</Title>
                  <ListsContainer>
                    <ListContainer>
                      <ListItem>{viewCount} views</ListItem>
                      <BsDot color="#64748b" />
                      <ListItem>{date}</ListItem>
                    </ListContainer>
                    <List2Container>
                      <List2Item>
                        <ReactionButton type="button" onClick={this.onLike}>
                          <BiLike
                            size={25}
                            color={like ? '#2563eb' : '#64748b'}
                          />
                          <ButtonText color={like ? '#2563eb' : '#64748b'}>
                            Like
                          </ButtonText>
                        </ReactionButton>
                      </List2Item>
                      <List2Item>
                        <ReactionButton type="button" onClick={this.onDislike}>
                          <BiDislike
                            size={25}
                            color={dislike ? '#2563eb' : '#64748b'}
                          />
                          <ButtonText color={dislike ? '#2563eb' : '#64748b'}>
                            Dislike
                          </ButtonText>
                        </ReactionButton>
                      </List2Item>
                      <List2Item>
                        <SavedButton type="button" onClick={saveClicked}>
                          <RiMenuAddFill
                            size={20}
                            color={saved ? '#2563eb' : '#64748b'}
                          />
                          <ButtonText color={saved ? '#2563eb' : '#64748b'}>
                            {savedText}
                          </ButtonText>
                        </SavedButton>
                      </List2Item>
                    </List2Container>
                  </ListsContainer>
                </VideoDetailsContainer>
                <ChannelDetailsContainer>
                  <ChannelImageAndNameContainer>
                    <ChannelImage src={profileImageUrl} alt="channel logo" />
                    <ChannelDetailsList>
                      <ChannelName isDarkMode={isDarkMode}>{name}</ChannelName>
                      <ChannelSubscribers>
                        {subscriberCount} subscribers
                      </ChannelSubscribers>
                    </ChannelDetailsList>
                  </ChannelImageAndNameContainer>
                  <Description isDarkMode={isDarkMode}>
                    {description}
                  </Description>
                </ChannelDetailsContainer>
              </ContentContainer>
            </SuccessViewContainer>
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
            <CustomBgContainer
              isDarkMode={isDarkMode}
              data-testid="videoItemDetails"
            >
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

export default VideoItemDetails
