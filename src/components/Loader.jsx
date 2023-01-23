import React from "react"
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner"
import styled, { keyframes } from "styled-components"

const spinAnimation = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}}`

const Spinner = styled(FaSpinner)`
  display: block;
  animation: ${spinAnimation} 1.5s infinite linear;
`

export const Loader = () => {
  return <Spinner size={32} />
}
