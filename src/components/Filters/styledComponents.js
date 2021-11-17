import styled from 'styled-components'

export const CustomBgContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  flex-direction: column;
  padding-top: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 18vw;
    padding-top: 30px;
  }
`
export const TabsList = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
`
export const TabItem = styled.li`
  list-style-type: none;
  background-color: ${props => {
    if (props.isActive && !props.isDarkMode) {
      return '#e2e8f0'
    }
    if (props.isActive && props.isDarkMode) {
      return ' #424242'
    }

    return 'transparent'
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  width: 100%;
  line-height: 2.5;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : ' #424242')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const TabButton = styled.button`
  background-color: ${props => {
    if (props.isActive && !props.isDarkMode) {
      return '#e2e8f0'
    }
    if (props.isActive && props.isDarkMode) {
      return ' #424242'
    }

    return 'transparent'
  }};
  width: 100%;
  border: none;
  font-size: 14px;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : ' #424242')};
  margin: 0;
  line-height: 2.5;
  text-decoration: none;
  text-align: start;
  display: flex;
  align-items: center;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  font-family: 'Roboto';
  padding-left: 20px;
`
