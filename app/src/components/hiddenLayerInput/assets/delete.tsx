import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#D25033"
      d="M1 18h12V4H1v14ZM14 1h-3.5l-1-1h-5l-1 1H0v2h14V1Z"
    />
  </Svg>
)
export default SvgComponent
