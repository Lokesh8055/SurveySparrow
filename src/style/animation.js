import { css, keyframes } from "styled-components";

const animation = ({ name, delay, duration }) => css`
  animation-delay: ${delay};
  animation-duration: ${duration}s;
  animation-name: ${name};
  animation-fill-mode: forwards;
`;

const rotationlr = keyframes`
    from  {
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(0);
    }
`;

const rotationrl = keyframes`
    from  {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(0);
    }
`;

const slidein = keyframes`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

const slideout = keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
 `;

const bounce = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(5px);
  }
`;

export { animation, rotationlr, rotationrl, slidein, slideout, bounce };
