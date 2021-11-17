import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'

import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import Filters from '../Filters'

import './index.css'

import {
  Navbar,
  Logo,
  NavMenu,
  NavMenuItem,
  NavMenuItem1,
  MenuButton,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  PopupDescription,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  PopupButton,
  PopupContainer2,
  PopupContainer3,
  NavItem,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, changeDarkMode} = value

      const onClickThemeButton = () => {
        changeDarkMode()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const logoUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <Navbar isDarkMode={isDarkMode}>
          <NavItem key="logo">
            <Link to="/">
              <Logo src={logoUrl} alt="website logo" />
            </Link>
          </NavItem>
          <NavItem key="menu">
            <NavMenu>
              <NavMenuItem1>
                <MenuButton
                  data-testid="theme"
                  type="button"
                  onClick={onClickThemeButton}
                >
                  {isDarkMode ? (
                    <FiSun
                      size={25}
                      color={isDarkMode ? '#f9f9f9' : '#0f0f0f'}
                    />
                  ) : (
                    <FaMoon size={25} />
                  )}
                </MenuButton>
              </NavMenuItem1>

              <NavMenuItem small>
                <Popup
                  modal
                  trigger={
                    <MenuButton type="button">
                      <GiHamburgerMenu
                        size={25}
                        color={isDarkMode ? '#f9f9f9' : '#0f0f0f'}
                      />
                    </MenuButton>
                  }
                  overlayStyle={{
                    backgroundColor: isDarkMode ? '#212121' : '#ffffff',
                    display: 'flex',
                  }}
                >
                  {close => (
                    <>
                      <PopupContainer2>
                        <PopupButton onClick={() => close()}>
                          <CgClose
                            size={25}
                            color={isDarkMode ? '#f9f9f9' : '#0f0f0f'}
                          />
                        </PopupButton>
                        <PopupContainer3>
                          <Filters />
                        </PopupContainer3>
                      </PopupContainer2>
                    </>
                  )}
                </Popup>
              </NavMenuItem>
              <NavMenuItem small>
                <Popup
                  modal
                  trigger={
                    <MenuButton type="button" onClick={onLogout}>
                      <FiLogOut
                        size={25}
                        color={isDarkMode ? '#f9f9f9' : '#0f0f0f'}
                      />
                    </MenuButton>
                  }
                  overlayStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }}
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer isDarkMode={isDarkMode}>
                      <PopupDescription isDarkMode={isDarkMode}>
                        Are you sure, you want to logout
                      </PopupDescription>
                      <ButtonsContainer>
                        <CloseButton type="button" onClick={() => close()}>
                          Cancel
                        </CloseButton>
                        <ConfirmButton type="button" onClick={onLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </NavMenuItem>
              <NavMenuItem large>
                <MenuButton>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </MenuButton>
              </NavMenuItem>
              <NavMenuItem large>
                <Popup
                  modal
                  trigger={
                    <LogoutButton isDarkMode={isDarkMode} type="button">
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer isDarkMode={isDarkMode}>
                      <PopupDescription isDarkMode={isDarkMode}>
                        Are you sure, you want to logout
                      </PopupDescription>
                      <ButtonsContainer>
                        <CloseButton
                          type="button"
                          onClick={() => close()}
                          isDarkMode={isDarkMode}
                        >
                          Cancel
                        </CloseButton>
                        <ConfirmButton
                          type="button"
                          onClick={onLogout}
                          isDarkMode={isDarkMode}
                        >
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </NavMenuItem>
            </NavMenu>
          </NavItem>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
