import React from 'react';

import Facebook from '../../assets/icons/Facebook.png';
import Instagram from '../../assets/icons/Instagram.png';
import Twitter from '../../assets/icons/Twitter.png';
import {
  FootFLex, FootLine, FootBlock, FooterRootText, FooterText, Inf, Icon,
} from './Style';

export default function Footer() {
  return (
    <>
      <FootLine>
        <FootFLex>
          <FootBlock>
            <FooterRootText>About</FooterRootText>
            <FooterText>About us</FooterText>
            <FooterText>Responsible Gaming</FooterText>
            <FooterText>Affiliate</FooterText>
          </FootBlock>

          <FootBlock>
            <FooterRootText>Help</FooterRootText>
            <FooterText>FAQs</FooterText>
            <FooterText>Contact Us</FooterText>
          </FootBlock>

          <FootBlock>
            <FooterRootText>Regulations</FooterRootText>
            <FooterText>General Terms and Conditions</FooterText>
            <FooterText>Privacy Policy</FooterText>
            <FooterText>AML & KYC Policy</FooterText>
          </FootBlock>

          <FootBlock>
            <FooterRootText>Social</FooterRootText>
            <FooterText>
              {' '}
              <Icon src={Facebook} />
              Facebook
            </FooterText>
            <FooterText>
              {' '}
              <Icon src={Twitter} />
              Twitter
            </FooterText>
            <FooterText>
              {' '}
              <Icon src={Instagram} />
              Instagram
            </FooterText>

          </FootBlock>

        </FootFLex>
      </FootLine>
      <Inf>
        <FooterText> Copyright ©2022, ZorroBet. All rights reserved</FooterText>
      </Inf>
    </>
  );
}
