import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {Link, withRouter} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {CustomBgContainer, TabsList, TabItem} from './styledComponents'

class Filters extends Component {
  state = {
    activeTab: '',
  }

  componentDidMount() {
    const {history} = this.props
    const {pathname} = history.location
    switch (pathname) {
      case '/':
        this.setState({activeTab: 'Home'})
        break
      case '/trending':
        this.setState({activeTab: 'Trending'})
        break
      case '/gaming':
        this.setState({activeTab: 'Gaming'})
        break
      case '/saved-videos':
        this.setState({activeTab: 'SavedVideos'})
        break
      default:
        break
    }
  }

  render() {
    const {activeTab} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <CustomBgContainer isDarkMode={isDarkMode}>
              <TabsList>
                <TabItem
                  isDarkMode={isDarkMode}
                  key="Home"
                  isActive={activeTab === 'Home'}
                >
                  <AiFillHome
                    size={25}
                    className="icon"
                    color={activeTab === 'Home' ? '#ff0000' : '#424242'}
                  />
                  <Link to="/" className={isDarkMode ? 'dark-link' : 'link'}>
                    Home
                  </Link>
                </TabItem>
                <TabItem
                  isDarkMode={isDarkMode}
                  key="Trending"
                  isActive={activeTab === 'Trending'}
                >
                  <HiFire
                    size={25}
                    className="icon"
                    color={activeTab === 'Trending' ? '#ff0000' : '#424242'}
                  />
                  <Link
                    to="/trending"
                    className={isDarkMode ? 'dark-link' : 'link'}
                  >
                    Trending
                  </Link>
                </TabItem>
                <TabItem
                  isDarkMode={isDarkMode}
                  key="Gaming"
                  isActive={activeTab === 'Gaming'}
                >
                  <SiYoutubegaming
                    size={25}
                    className="icon"
                    color={activeTab === 'Gaming' ? '#ff0000' : '#424242'}
                  />
                  <Link
                    to="/gaming"
                    className={isDarkMode ? 'dark-link' : 'link'}
                  >
                    Gaming
                  </Link>
                </TabItem>
                <TabItem
                  isDarkMode={isDarkMode}
                  key="SavedVideos"
                  isActive={activeTab === 'SavedVideos'}
                >
                  <RiMenuAddFill
                    size={25}
                    className="icon"
                    color={activeTab === 'SavedVideos' ? '#ff0000' : '#424242'}
                  />
                  <Link
                    to="/saved-videos"
                    className={isDarkMode ? 'dark-link' : 'link'}
                  >
                    Saved videos
                  </Link>
                </TabItem>
              </TabsList>
            </CustomBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Filters)
