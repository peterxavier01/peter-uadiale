interface GithubProps {
  fill: string;
  className?: string;
}

export default function Github({ fill = "#ffffff", className }: GithubProps) {
  return (
    <svg
      width="80"
      height="79"
      viewBox="0 0 80 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.9997 0C17.9114 0 0 17.9074 0 39.9997C0 57.6732 11.4611 72.6662 27.3542 77.9559C29.3526 78.3268 30.0865 77.0882 30.0865 76.0317C30.0865 75.0779 30.0494 71.9269 30.0322 68.5846C18.9043 71.0042 16.5561 63.8651 16.5561 63.8651C14.7366 59.2417 12.1149 58.0124 12.1149 58.0124C8.48506 55.5298 12.3885 55.5814 12.3885 55.5814C16.4044 55.863 18.5201 59.7034 18.5201 59.7034C22.0877 65.8172 27.8775 64.0499 30.16 63.0286C30.5191 60.4433 31.5557 58.6781 32.6996 57.6792C23.8151 56.6691 14.4749 53.2386 14.4749 37.9119C14.4749 33.5448 16.0382 29.9766 18.5969 27.1747C18.1809 26.1679 16.8118 22.0996 18.9837 16.5899C18.9837 16.5899 22.342 15.5149 29.9858 20.69C33.1772 19.8031 36.5997 19.3573 39.9997 19.3421C43.3977 19.3573 46.8222 19.8018 50.0195 20.6887C57.654 15.5136 61.0083 16.5886 61.0083 16.5886C63.1855 22.0976 61.8164 26.1666 61.4011 27.1734C63.9658 29.9752 65.5178 33.5435 65.5178 37.9105C65.5178 53.2737 56.1604 56.6558 47.2534 57.6467C48.6887 58.888 49.9671 61.3229 49.9671 65.0541C49.9671 70.4061 49.9208 74.7136 49.9208 76.031C49.9208 77.0955 50.6414 78.3427 52.6683 77.9499C68.5521 72.6549 80 57.6666 80 39.9997C79.9993 17.9087 62.09 0 39.9997 0Z"
        fill={fill}
      />
      <path
        d="M15.1499 57.4302C15.0618 57.6289 14.7492 57.6885 14.4643 57.5527C14.1729 57.4229 14.0106 57.152 14.1047 56.9526C14.1908 56.7472 14.5041 56.6909 14.7935 56.8281C15.085 56.9585 15.2506 57.2321 15.1492 57.4308L15.1499 57.4302ZM16.7701 59.2378C16.58 59.4146 16.2071 59.3325 15.954 59.0523C15.6917 58.7741 15.6427 58.4012 15.8368 58.2217C16.0342 58.0455 16.3958 58.129 16.6581 58.4072C16.9191 58.6893 16.9708 59.0589 16.7707 59.2385L16.7701 59.2378ZM18.3479 61.5409C18.1028 61.7118 17.7014 61.5521 17.4537 61.1964C17.2086 60.8401 17.2086 60.4128 17.4603 60.2426C17.7073 60.0717 18.1028 60.2261 18.3545 60.5784C18.5982 60.9394 18.5982 61.3673 18.3479 61.5409ZM20.5079 63.7671C20.2893 64.0089 19.8217 63.944 19.4799 63.6148C19.1308 63.2922 19.0334 62.8332 19.2527 62.5921C19.4752 62.3496 19.9449 62.4172 20.2886 62.7444C20.6377 63.0663 20.743 63.526 20.5092 63.7665L20.5079 63.7671ZM23.4886 65.0594C23.3912 65.3727 22.9421 65.5151 22.4884 65.3813C22.036 65.2442 21.7399 64.8779 21.8326 64.5613C21.9254 64.2454 22.3778 64.0977 22.8341 64.2401C23.2866 64.3765 23.5826 64.7408 23.4886 65.0594ZM26.7627 65.2985C26.774 65.6284 26.3898 65.9013 25.9149 65.9079C25.436 65.9192 25.0485 65.6516 25.0438 65.327C25.0438 64.9938 25.4201 64.7243 25.8983 64.715C26.3732 64.7064 26.7634 64.9713 26.7634 65.2979L26.7627 65.2985ZM29.8083 64.7806C29.8653 65.1018 29.5348 65.4323 29.0625 65.5204C28.5988 65.6065 28.1683 65.4065 28.1087 65.0879C28.0517 64.758 28.3882 64.4275 28.8518 64.3421C29.3248 64.2606 29.7487 64.454 29.8083 64.7806Z"
        fill={fill}
      />
    </svg>
  );
}
