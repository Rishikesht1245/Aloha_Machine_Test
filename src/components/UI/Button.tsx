interface Props {
  type: "button" | "submit" | "reset" | undefined;
  children?: string;
  className?: string;
  onClick?: () => any;
}

const Button = ({ type, children, className, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-center rounded-[8px] py-[8px] text-[16px] px-[24px] hover-brightness-125 hover:shadow-lg active-shadow-inner active-brightness-100 font-[700] ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
