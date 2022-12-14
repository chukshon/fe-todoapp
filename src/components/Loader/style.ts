import styled, { keyframes } from "styled-components"

const spinKeyFrame = keyframes`
 0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
 `

export const LoaderWrapper = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spinKeyFrame} 2s linear infinite;
`
