interface Props {
  children: string;
  onClick?: (arg: any) => any;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick ? (arg) => onClick(arg) : () => {}}
      className="primary-btn"
    >
      {children}
    </button>
  );
};

export default Button;
