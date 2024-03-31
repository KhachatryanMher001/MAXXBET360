import styled from 'styled-components'
import { Link, NavLink as RRNavLink } from 'react-router-dom'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background-color: rgba(19, 13, 37, 1);
  display: flex;
  flex-direction: column;
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`

export const NavLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    margin-right: 0;
  }
`

export const NavLink = styled(RRNavLink)`
  color: #808792;
  font-size: 14px;
  text-decoration: none;
  margin: 10px;
  margin-right: 40px;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
    margin-right: 0;
  }
  &.active {
    color: #1bb96b;
  }
`

export const NavLogo = styled(RRNavLink)`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin: 10px;
  margin-right: 60px;
  display: flex;
  align-items: center;
  font-weight: bold;
`
export const PromotionColor = styled.div`
  color: rgba(185, 141, 27, 1);
`
export const BetText = styled.span`
  color: rgba(185, 27, 93, 1);
  font-family: Inter;
  font-size: 14px;
  font-weight: 900;
`
export const LogoText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 900;
  line-height: 24px;
  text-align: left;
`
export const Image = styled.img`
  margin-right: 5px;
  width: 20px;
  height: 20px;
`
export const ExpandMore = styled.img`
  margin-left: 5px;
`

export const NavLinkExtended = styled(Link)`
  color: #808792;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`

export const Logo = styled(Link)`
  color: #fff;
  letter-spacing: 1px;
  font-weight: 900;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`
export const NavbarExtendedContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media (max-width: 900px) {
    display: flex;
  }
`

export const ButtonsContainer = styled.div`
  color: #808792;
  font-size: 14px;
  text-decoration: none;
  margin: 10px;
  margin-right: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const ButtonLogin = styled.button`
  color: #fff;
  background-color: rgb(27 185 107 / 0%);
  border: 1px solid white;
  padding: 10px 10px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 114px;
  @media (max-width: 1393px) {
    width: unset;
  }
`
export const ButtonSignUp = styled.button`
  color: #fff;
  background-color: rgba(27, 185, 107, 1);
  border: none;
  padding: 10px 10px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 114px;
`

export const ExpandMoreButton = styled.button`
  color: #ffffff;
  background-color: unset;
  border: none;
  padding: 10px 10px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
`
