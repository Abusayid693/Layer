import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillOpacity={0.32}
      d="M.117 8.007c0 .299.105.553.315.764.21.204.462.307.756.307h4.889v4.889c0 .288.102.537.307.747.205.21.456.315.755.315.293 0 .545-.105.756-.315.21-.21.315-.46.315-.747v-4.89h4.89c.287 0 .536-.102.746-.306.21-.21.316-.465.316-.764a1.03 1.03 0 0 0-.316-.756c-.21-.21-.46-.315-.747-.315H8.21v-4.88a1.03 1.03 0 0 0-.315-.756 1.03 1.03 0 0 0-.756-.316c-.299 0-.55.106-.755.316-.205.21-.307.462-.307.755v4.881h-4.89a1.03 1.03 0 0 0-.755.315 1.03 1.03 0 0 0-.315.756Z"
    />
  </Svg>
)
export default SvgComponent
