import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  changeDarkMode: () => {},
  savedList: [],
  addToSavedList: () => {},
  removeFromSavedList: () => {},
})

export default NxtWatchContext
