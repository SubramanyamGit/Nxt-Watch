import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNowStrict} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  VideoItem,
  Thumbnail,
  CustomContainer,
  ChannelImage,
  CustomContainer2,
  Title,
  List,
  ListItem,
} from './styledComponents'

const Video = props => {
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
    roundingMethod: 'floor',
  })

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <VideoItem>
            <Link to={`/videos/${id}`} className="link">
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <CustomContainer>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <CustomContainer2>
                  <Title isDarkMode={isDarkMode}>{title}</Title>
                  <List>
                    <ListItem>{name}</ListItem>
                    <BsDot color="#475569" />
                    <ListItem>{viewCount} views</ListItem>
                    <BsDot color="#475569" />
                    <ListItem>{date}</ListItem>
                  </List>
                </CustomContainer2>
              </CustomContainer>
            </Link>
          </VideoItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Video
