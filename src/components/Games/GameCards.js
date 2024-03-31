import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {
  GameContainer,
  Container,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  GameCardHeader,
  SwiperBtns,
  BtnText,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
  Previous,
  Next,
  TitleContainer,
} from './style'

SwiperCore.use([Navigation])

function GameCard({ text }) {
  const [slideCount, setSlideCount] = useState(
    window.innerWidth >= 1280 ? 6 : 5,
  )
  const swiperRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlideCount(6)
      } else if (window.innerWidth >= 1080) {
        setSlideCount(5)
      } else if (window.innerWidth >= 880) {
        setSlideCount(4)
      } else if (window.innerWidth >= 580) {
        setSlideCount(3)
      } else if (window.innerWidth >= 400) {
        setSlideCount(2)
      } else {
        setSlideCount(1)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const prevButton = useRef(null)
  const nextButton = useRef(null)

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper

    prevButton.current.addEventListener('click', () => {
      swiperInstance.slidePrev()
    })

    nextButton.current.addEventListener('click', () => {
      swiperInstance.slideNext()
    })
  }, [])

  return (
    <GameContainer>
      <TitleContainer>
        <GameCardHeader>{text}</GameCardHeader>
        <SwiperBtns>
          <BtnText>All Games</BtnText>
          <Previous ref={prevButton}>
            <FaChevronLeft />
          </Previous>
          <Next ref={nextButton}>
            <FaChevronRight />
          </Next>
        </SwiperBtns>
      </TitleContainer>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={slideCount}
        loop
        navigation={false}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Container>
            <Card1 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card2 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card3 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card4 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card5 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card6 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card7 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card8 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card9 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card10 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card11 />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Card12 />
          </Container>
        </SwiperSlide>
      </Swiper>
    </GameContainer>
  )
}

GameCard.propTypes = {
  text: PropTypes.string.isRequired,
}

export default GameCard
