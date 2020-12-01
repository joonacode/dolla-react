import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, Img, TextWrapper, TopLine, HeadLine, Subtitle, BtnWrap } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, lightText, topLine, headLine, lightTextDesc, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
     <InfoContainer ligthBg={lightBg} id={id}>
       <InfoWrapper>
         <InfoRow imgStart={imgStart}>
           <Column1>
             <TextWrapper>
               <TopLine>{topLine}</TopLine>
               <HeadLine lightText={lightText}>{headLine}</HeadLine>
               <Subtitle lightText={lightTextDesc}>{description}</Subtitle>
               <BtnWrap>
                 <Button 
                  to="home" 
                  smooth={true} 
                  duration={false} 
                  spy={true} 
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}

                >
                {buttonLabel}
                </Button>
               </BtnWrap>
             </TextWrapper>
           </Column1>
           <Column2>
             <ImgWrap>
               <Img src={img} alt={alt} />
             </ImgWrap>
           </Column2>
         </InfoRow>
       </InfoWrapper>
     </InfoContainer> 
    </>
  )
}

export default InfoSection
