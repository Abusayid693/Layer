import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m14.359 15.78-6.36-6.37-6.36 6.37-1.42-1.42L6.589 8 .219 1.64 1.639.22l6.36 6.37 6.36-6.36 1.41 1.41L9.409 8l6.36 6.36-1.41 1.42Z"
    />
  </Svg>
)
export default SvgComponent