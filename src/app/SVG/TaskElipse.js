const TaskElipse = ({stroke, fill}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={35}
    fill="none"
  >
    <path
      fill={fill}
      stroke={stroke}
      d="M32.375 17.48c0 8.923-7.09 16.14-15.814 16.14S.747 26.403.747 17.48c0-8.923 7.09-16.14 15.814-16.14 8.725 0 15.814 7.217 15.814 16.14Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 19 5.846 8L26 9"
    />
  </svg>
)
export default TaskElipse
