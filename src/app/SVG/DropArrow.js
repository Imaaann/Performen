import * as React from "react"
const DropArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="m6 9 6 6 6-6"
    />
  </svg>
)
export default DropArrow
