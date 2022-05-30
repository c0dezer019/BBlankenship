import styled, { keyframes } from 'styled-components';

const mouseWheel = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(6px);
  }
`;

const MouseWheel = styled.div`
  height: 5px;
  width: 2px;
  display: block;
  margin: 5px auto;
  background: white;
  position: relative;
  height: 4px;
  width: 4px;
  border: 2px solid #fff;
  border-radius: 8px;
  animation: ${mouseWheel} 0.6s linear infinite;
`;

export default MouseWheel;