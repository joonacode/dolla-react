import React, { useState } from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'
import Video from '../../videos/video1.mp4'

const HeroSection = () => {

  const [hover, setHover] = useState(false)
  const onHover = () => setHover(!hover)

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for a new account today and receive $250 in credit towards your next paymeny.</HeroP>
        <HeroBtnWrapper>
          <Button 
            to="signup" 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80} 
            primary='true' 
            dark='true' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
