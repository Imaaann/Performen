const ThemeBubbles = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={21}
      fill="none"
      {...props}
    >
      <circle cx={5} cy={5} r={5} fill={props.primary} />
      <circle cx={16} cy={16} r={5} fill={props.complement} />
      <circle cx={5} cy={16} r={5} fill={props.accent} />
      <circle cx={16} cy={5} r={5} fill={props.secondary} />
    </svg>
  )
export default ThemeBubbles