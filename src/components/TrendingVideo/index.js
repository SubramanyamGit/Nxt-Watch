import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

import {
  VideoItem,
  Thumbnail,
  ChannelDetailsContainer,
  ChannelImage,
  CustomContainer,
  ChannelName,
  List,
  ListItem,
} from './styledComponents'

const TrendingVideo = props => {
  const {videoDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
    id,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const date = formatDistanceToNowStrict(new Date(publishedAt), {
    addSuffix: true,
  })
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <Link to={`/videos/${id}`} className="link">
            <VideoItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDetailsContainer>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <CustomContainer>
                  <ChannelName isDarkMode={isDarkMode}>{title}</ChannelName>
                  <List>
                    <ListItem>{name}</ListItem>
                    <BsDot color="#64748b" />
                    <ListItem>{viewCount} views</ListItem>
                    <BsDot color="#64748b" />
                    <ListItem>{date}</ListItem>
                  </List>
                </CustomContainer>
              </ChannelDetailsContainer>
            </VideoItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideo
