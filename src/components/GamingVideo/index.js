import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  VideoItem,
  Thumbnail,
  CustomContainer,
  Name,
  Para,
} from './styledComponents'

const GamingVideo = props => {
  const {videoDetails} = props
  const {id, title, viewCount, thumbnailUrl} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <VideoItem isDarkMode={isDarkMode}>
            <Link to={`/videos/${id}`} className="link">
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <CustomContainer>
                <Name isDarkMode={isDarkMode}>{title}</Name>
                <Para>{viewCount} Watching World Wide</Para>
              </CustomContainer>
            </Link>
          </VideoItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideo
