import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M7.625 14.167h5m1.667 3.333H5.958a3.333 3.333 0 0 1-3.333-3.333V8.923c0-1.166.609-2.246 1.606-2.85l4.166-2.526a3.333 3.333 0 0 1 3.456 0l4.166 2.525a3.333 3.333 0 0 1 1.606 2.851v5.244a3.333 3.333 0 0 1-3.333 3.333Z"
    />
  </Svg>
)
export default SvgComponent
