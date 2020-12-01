import ImgSvg1 from '../../images/svg-1.svg'
import ImgSvg2 from '../../images/svg-2.svg'
import ImgSvg3 from '../../images/svg-3.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transaction with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: ImgSvg1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headLine: 'Unlimited Transaction with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: ImgSvg2,
  alt: 'Pigybank',
  dark: false,
  primary: false,
  darkText: true
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join Our Team',
  headLine: 'Creating an account is extreamly easy',
  description: 'Get everything set up and ready is under 10 minutes. All you need to do is add your information and you\'re ready to go.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: ImgSvg3,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true
}