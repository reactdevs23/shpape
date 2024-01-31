import React from "react";

const Line = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 821 255">
      <path
        fill={color}
        d="M806.89 255h-8.22q-.1-92.68-.02-185.36 0-5.27-.75-9.47c-2.66-14.92-13.07-25.62-27.69-29.75q-4.54-1.28-13.34-1.28Q378.44 29.05 0 29.11v-8.08q382.12.01 764.25-.01c15.93 0 30.53 11.27 37.56 24.69q5.12 9.75 5.11 20.79-.08 94.25-.03 188.5Z"
      />
    </svg>
  );
};

export default Line;
