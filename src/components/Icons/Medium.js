import { cx } from "@/src/utils";

export const DribbbleIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={43}
      viewBox="0 0 42 43"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          fill="#E74D89"
          d="M21 2.202c10.828 0 19.59 8.761 19.59 19.573 0 10.812-8.762 19.589-19.59 19.589S1.41 32.603 1.41 21.79C1.412 10.98 10.173 2.202 21 2.202Z"
        />
        <path
          fill="#B2215A"
          d="M21 42.758c-11.583 0-21-9.4-21-20.967C0 10.208 9.417.808 21 .808s21 9.4 21 20.967c0 11.566-9.417 20.983-21 20.983Zm17.702-18.112c-.607-.197-5.545-1.657-11.172-.771 2.346 6.431 3.297 11.681 3.478 12.764 4.036-2.707 6.907-7.006 7.694-11.993Zm-10.696 13.65c-.263-1.575-1.313-7.055-3.823-13.584a.304.304 0 0 1-.115.032c-10.123 3.528-13.749 10.533-14.077 11.19A17.866 17.866 0 0 0 21 39.706a17.525 17.525 0 0 0 7.006-1.411ZM7.678 33.784c.41-.689 5.332-8.826 14.585-11.829.23-.082.476-.147.706-.213a46.698 46.698 0 0 0-1.46-3.035C12.55 21.38 3.855 21.267 3.068 21.25c0 .18-.016.36-.016.541a17.927 17.927 0 0 0 4.626 11.993ZM3.445 18.133c.804.016 8.187.049 16.587-2.182-2.97-5.283-6.185-9.713-6.645-10.353-5.036 2.363-8.777 6.99-9.942 12.535ZM16.8 4.384c.492.656 3.757 5.086 6.694 10.484 6.382-2.396 9.072-6.005 9.4-6.464A17.882 17.882 0 0 0 21 3.892c-1.444 0-2.855.18-4.2.492Zm18.08 6.087c-.378.508-3.38 4.364-10.008 7.071.41.853.82 1.723 1.198 2.592.13.312.262.624.393.919 5.972-.755 11.895.46 12.485.574a17.843 17.843 0 0 0-4.068-11.156Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
