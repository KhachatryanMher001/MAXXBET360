import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SoccerIcon from '../../assets/icons/soccer.svg';
import ChelseaIcon from '../../assets/icons/Chelsea.svg';
import LiverpoolIcon from '../../assets/icons/Liverpool.svg';
import WestHamIcon from '../../assets/icons/West Ham.svg';
import {
  Card,
  CardContainer,
  StartText,
  EndText,
  TextWrapper,
  CardImage,
  CardSvg,
  Team,
  Team2,
  TeamContainer,
  But,
  BtnInfo,
} from './style';

function MatchCard({
  leagueIcon, team1Icon, team2Icon, team1Name, team2Name, date, date2,
}) {
  return (
    <Card>
      <TextWrapper>
        <StartText>
          <CardImage src={leagueIcon} alt="Soccer" />
          {date}
        </StartText>
        <EndText>{date2}</EndText>
      </TextWrapper>
      <TeamContainer>
        <Team>
          <CardSvg src={team1Icon} />
          {team1Name}
        </Team>
        <p>VS</p>
        <Team2>
          <CardSvg src={team2Icon} />
          {team2Name}
        </Team2>
      </TeamContainer>
      <TeamContainer>
        <But>
          <BtnInfo>1</BtnInfo>
          <p> 1.87</p>
        </But>
        <But>
          <BtnInfo>X</BtnInfo>
          <p> 1.87</p>
        </But>
        <But>
          <BtnInfo>2</BtnInfo>
          <p>1.87</p>
        </But>
      </TeamContainer>
    </Card>
  );
}

MatchCard.propTypes = {
  leagueIcon: PropTypes.string.isRequired,
  team1Icon: PropTypes.string.isRequired,
  team2Icon: PropTypes.string.isRequired,
  team1Name: PropTypes.string.isRequired,
  team2Name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  date2: PropTypes.string.isRequired,
};

function PremierLeague() {
  const [slideCount, setSlideCount] = useState(window.innerWidth >= 1280 ? 4 : 3);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlideCount(4);
      } else if (window.innerWidth >= 1080) {
        setSlideCount(3);
      } else if (window.innerWidth >= 680) {
        setSlideCount(2);
      } else {
        setSlideCount(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0 });
    }
  }, [slideCount]);

  const renderMatchCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i += 1) {
      cards.push(
        <MatchCard
          key={i}
          leagueIcon={SoccerIcon}
          team1Icon={i % 2 === 0 ? ChelseaIcon : WestHamIcon}
          team2Icon={LiverpoolIcon}
          team1Name={i % 2 === 0 ? 'Chelsea' : 'West Ham'}
          team2Name="Liverpool"
          date="Premier League"
          date2="Feb 2, 00:00"
        />,
      );
    }
    return cards;
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <CardContainer ref={containerRef}>
        {renderMatchCards()}
      </CardContainer>
    </div>
  );
}
export default PremierLeague;
