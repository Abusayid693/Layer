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
      fill="#fff"
      d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2Z"
    />
  </Svg>
)
export default SvgComponent