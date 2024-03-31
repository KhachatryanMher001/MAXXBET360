import React, { useState } from 'react'
import SportSvg from '../../assets/icons/Sport.svg'
import LiveSvg from '../../assets/icons/Live.svg'
import CasinoSvg from '../../assets/icons/Casino.svg'
import LiveCasinoSvg from '../../assets/icons/Live Casino.svg'
import VirtualGamesSvg from '../../assets/icons/Virtual Game.svg'
import PromotionSvg from '../../assets/icons/Local Police.svg'
import ExpandMoreSvg from '../../assets/icons/expand_more.svg'
import {
  NavbarContainer,
  LeftContainer,
  NavbarInnerContainer,
  NavLinksContainer,
  NavLink,
  BetText,
  NavLogo,
  OpenLinksButton,
  NavbarExtendedContainer,
  NavLinkExtended,
  ButtonsContainer,
  ButtonLogin,
  ButtonSignUp,
  Image,
  ExpandMore,
  ExpandMoreButton,
  LogoText,
  PromotionColor,
} from './style'

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false)

  const toggleExtendNavbar = () => {
    setExtendNavbar((curr) => !curr)
  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavLinksContainer>
            <NavLogo exact to="/">
              <BetText> Maxx</BetText>
              <LogoText>Bet360</LogoText>
            </NavLogo>
            <NavLink activeClassName="active" to="/sport">
              <Image src={SportSvg} />
              Sport
            </NavLink>
            <NavLink activeClassName="active" to="/live">
              <Image src={LiveSvg} />
              Live
            </NavLink>
            <NavLink activeClassName="active" to="/casino">
              <Image src={CasinoSvg} />
              Casino
            </NavLink>
            <NavLink activeClassName="active" to="/live-casino">
              <Image src={LiveCasinoSvg} />
              Live Casino
            </NavLink>
            <NavLink activeClassName="active" to="/virtual-games">
              <Image src={VirtualGamesSvg} />
              Virtual Games
            </NavLink>
            <NavLink activeClassName="active" to="/promotion">
              <Image src={PromotionSvg} />
              <PromotionColor>Promotion</PromotionColor>
            </NavLink>

            <ButtonsContainer>
              <ExpandMoreButton>
                En
                <ExpandMore src={ExpandMoreSvg} />
              </ExpandMoreButton>
            </ButtonsContainer>
            <ButtonsContainer>
              <ButtonLogin>Login</ButtonLogin>
              <ButtonSignUp>Sign Up</ButtonSignUp>
            </ButtonsContainer>

            <OpenLinksButton onClick={toggleExtendNavbar}>
              {extendNavbar ? <> &#10005; </> : <> &#8801; </>}
            </OpenLinksButton>
          </NavLinksContainer>
        </LeftContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavLinkExtended to="/">Sport</NavLinkExtended>
          <NavLinkExtended to="/live">Live</NavLinkExtended>
          <NavLinkExtended to="/casino">Casino</NavLinkExtended>
          <NavLinkExtended to="/virtual-games">Virtual Games</NavLinkExtended>
          <NavLinkExtended to="/promotion">Promotion</NavLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default Navbar
