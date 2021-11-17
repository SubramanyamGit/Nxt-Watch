import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding: 10px 42px 10px 42px;
  }
`

export const NavItem = styled.li`
  list-style-type: none;
`

export const Logo = styled.img`
  height: 26px;
  @media screen and (min-width: 768px) {
    height: 28px;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0px;
  align-items: center;
`
export const NavMenuItem = styled.li`
  list-style-type: none;
  display: ${props => (props.large ? 'none' : 'block')};
  @media screen and (min-width: 768px) {
    display: ${props => (props.small ? 'none' : 'block')};
    display: ${props => (props.large ? 'block' : 'none')};
    margin-left: 6px;
    margin-right: 6px;
  }
`

export const NavMenuItem1 = styled.li`
  list-style-type: none;
  @media screen and (min-width: 768px) {
    margin-left: 6px;
    margin-right: 6px;
  }
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 2px;
  cursor: pointer;
`
export const ProfileImage = styled.img`
  height: 29px;

  @media screen and (min-width: 768px) {
  }
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#3b82f6')};
  border-color: ${props => (props.isDarkMode ? '#f9f9f9' : '#3b82f6')};
  line-height: 1.5;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  margin-right: 6px;
  font-weight: bold;
  font-family: 'Roboto';
  border-radius: 2px;
  font-size: 15px;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  height: 150px;
  width: 100%;
  padding: 5px 15px 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`
export const PopupDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#00306e')};
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 2;
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const CloseButton = styled.button`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#94a3b8')};
  padding: 5px 18px 5px 18px;
  border: solid 1px;
  border-color: ${props => (props.isDarkMode ? '#64748b' : ' #00306e')};
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-right: 20px;
  line-height: 1.6;
  background-color: transparent;
  outline: none;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  padding: 6px 18px 6px 18px;
  border: solid 1px #3b82f6;
  border-radius: 2px;
  cursor: pointer;
  color: #f9f9f9;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.6;
`

export const PopupButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 30px;
`
export const PopupContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: flex-end;
  width: 90vw;
  height: 100vh;
  padding-top: 30px;
`
export const PopupContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  justify-content: center;
  background-color: transparent;
`
