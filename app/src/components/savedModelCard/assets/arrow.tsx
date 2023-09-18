import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.273 20.313a1 1 0 0 0 1.454 1.374l8.5-9a1 1 0 0 0 0-1.374l-8.5-9.001a1 1 0 1 0-1.454 1.373L19.125 12l-7.852 8.313Z"
    />
  </Svg>
)
export default SvgComponent
