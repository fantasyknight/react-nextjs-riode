import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`{
    from {
        opacity:0;
    }
  
    to {
        opacity:1;
    }
}`

export const fadeInRightShorter = keyframes`
from {
  opacity: 0;
  transform: translate(-50px,0);
  transform-origin: 0 0;
}

to {
  opacity: 1;
  transform: none
}`;

export const fadeInRight = keyframes`
0% {
    -webkit-transform: translate3d(100%,0,0);
    opacity: 0;
    transform: translate3d(100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;

export const fadeInLeftShorter = keyframes`{
    from {
        opacity: 0;
        transform: translate(50px,0);
        transform-origin: 0 0;
    }
    to {
        opacity: 1;
        transform: none
    }
}`

export const fadeInLeft = keyframes`
0% {
    -webkit-transform: translate3d(-100%,0,0);
    opacity: 0;
    transform: translate3d(-100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;

export const fadeInUpShorter = keyframes`
from {
    opacity: 0;
    transform: translate(0,50px);
    transform-origin: 0 0;
}
to {
    opacity:1;
    transform:none
}`

export const fadeInUp = keyframes`
0% {
    -webkit-transform: translate3d( 0, 100%, 0 );
    opacity: 0;
    transform: translate3d( 0, 100 %, 0 )
}

to {
    -webkit-transform: translateZ( 0 );
    opacity: 1;
    transform: translateZ( 0 )
}`

export const fadeInDownShorter = keyframes`
from {
    opacity: 0;
    transform: translate(0,-50px);
    transform-origin: 0 0;
}

to {
    opacity: 1;
    transform: none
}`

export const blurIn = keyframes`{
    from {
        opacity: 0;
        filter: blur(20px);
        transform: scale(1.2);
    }
    to {
        opacity: 1;
        filter: blur(0);
        transform: none 
    }
}`

export const grayOut = keyframes`{
    from {
        opacity: 1;
        filter: grayscale(0);
    }
    15% {
        filter: grayscale(100%);
    }
    to {
        opacity: .0;
        filter: grayscale(100%);
    }
}`

export const dotPulse = keyframes`{
    from {
        opacity:1;
        transform:scale(.2)
    }
  
    to {
        opacity:0;
        transform:scale(1)
    }
}`

export const maskUp = keyframes`{
    from {
        transform: translate(0,100%)
    }
  
    to {
        transform: translate(0,0)
    }
}`

export const maskRight = keyframes`{
    from {
        transform: translate(-100%,0)
    }
    to {
        transform: translate(0,0)
    }
}`

export const maskDown = keyframes`{
    from {
        transform: translate(0,-100%)
    }
    to {
        transform: translate(0,0)
    }
}`

export const maskLeft = keyframes`{
    from {
        transform: translate(100%,0)
    }
    to {
        transform: translate(0,0)
    }
}`

export const slideInUp = keyframes`{
    0% {
        transform: translate3d(0, 100%, 0);
        visibility: visible
    }

    to {
        transform: translateZ(0)
    }
}`

export const slideInDown = keyframes`{
    0% {
        transform: translate3d(0, -100%, 0);
        visibility: visible
    }

    to {
        transform: translateZ(0)
    }
}`

export const slideInLeft = keyframes`{
    0% {
        transform: translate3d(-100%, 0, 0);
        visibility: visible
    }
  
    to {
        transform: translateZ(0)
    }
}`

export const slideInRight = keyframes`{
    0% {
        transform: translate3d(100%, 0, 0);
        visibility: visible
    }
  
    to {
        transform: translateZ(0)
    }
}`

export const flipInX = keyframes`{
    0% {
        animation-timing-function: ease-in;
        opacity: 0;
        transform: perspective(400px) rotateX(90deg)
    }
  
    to {
        transform: perspective(400px)
    }
}`

export const flipInY = keyframes`{
  0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: perspective(400px) rotateY(90deg);
  }

  to {
      transform: perspective(400px);
  }
}`

export const flipOutY = keyframes`{
    0% {
        animation-timing-function: ease-out;
        transform: perspective(400px)
    }

    to {
        opacity: 0;
        transform: perspective(400px) rotateY(90deg)
    }
}`

export const brightIn = keyframes` {
    0% {
        animation-timing-function: ease-in;
        filter: brightness(0%)
    }
  
    to {
        filter: brightness(100%)
    }
}`

export const zoomInShorter = keyframes`{
    0%{
        -webkit-transform:scale3d(.8,.8,.8);
        opacity:0;
        transform:scale3d(.8,.8,.8)
    }
    50%{
        opacity:1
    }
}`

export const bounceInUp = keyframes`{
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
        opacity: 0;
        transform: translate3d(0, 3000px, 0);
    }

    60% {
        opacity: 1;
        transform: translate3d(0, -20px, 0);
    }

    75% {
        transform: translate3d(0, 10px, 0);
    }

    90% {
        transform: translate3d(0, -5px, 0);
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}`

export const slideZoomIn = keyframes`{
    0%{
        transform:scale3d(1,1,1);
        opacity: 1;
    }
    100% {
        transform:scale3d(1.1,1.1,1);
        opacity: 1;
    }
}`