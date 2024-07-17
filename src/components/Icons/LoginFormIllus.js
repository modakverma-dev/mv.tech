import { cx } from "@/src/utils";
import * as React from "react";
const LoginFormIllus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={865}
    height={720}
    fill="none"
    className={cx(props.className)}
    {...props}
  >
    <path
      fill={props.color ? props.color : "#264ECA"}
      d="M257.5 139C121.9 151.8 29.667 51 .5-1l864 3.5v718H768C469.2 682.5 519.5 531 582 460c36.5-49.833 102.5-169.9 74.5-251.5-35-102-229.5-85.5-399-69.5Z"
    />
  </svg>
);
export default LoginFormIllus;
