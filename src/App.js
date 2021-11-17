import './App.css'

import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDarkMode: false,
    savedList: [],
  }

  componentDidMount() {
    const isDarkMode = Cookies.get('is_dark_mode')
    if (isDarkMode === undefined || isDarkMode === 'false') {
      this.setState({isDarkMode: false})
    } else {
      this.setState({isDarkMode: true})
    }
  }

  removeFromSavedList = video => {
    const {savedList} = this.state
    const updatedList = savedList.filter(eachOne => eachOne.id !== video.id)
    this.setState({savedList: updatedList})
  }

  addToSavedList = newVideo => {
    const video = {
      ...newVideo,
      saved: true,
    }
    this.setState(prevState => ({
      savedList: [...prevState.savedList, video],
    }))
  }

  saveDarkMode = () => {
    const {isDarkMode} = this.state
    Cookies.set('is_dark_mode', isDarkMode, {expires: 30})
  }

  changeDarkMode = () => {
    this.setState(
      prevState => ({isDarkMode: !prevState.isDarkMode}),
      this.saveDarkMode,
    )
  }

  render() {
    const {isDarkMode, savedList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          changeDarkMode: this.changeDarkMode,
          savedList,
          addToSavedList: this.addToSavedList,
          removeFromSavedList: this.removeFromSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
