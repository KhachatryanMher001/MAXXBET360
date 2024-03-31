import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Card1, Card2, Card3, Card4, HeaderContainer } from './style'
import {
  Container,
  SwiperBtns,
  BtnText,
  GameCardHeader,
  Previous,
  Next,
} from '../Games/style'

SwiperCore.use([Navigation])

function LiveCard() {
  const swiperRef = useRef(null)

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
    <div>
      <HeaderContainer>
        <GameCardHeader>Live Casino</GameCardHeader>
        <SwiperBtns>
          <BtnText>All Games</BtnText>
          <Previous ref={prevButton}>
            <FaChevronLeft />
          </Previous>
          <Next ref={nextButton}>
            <FaChevronRight />
          </Next>
        </SwiperBtns>
      </HeaderContainer>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={4}
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
      </Swiper>
    </div>
  )
}

export default LiveCard
