import { ButtonProps } from '../../types/Button';

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-lg md:text-md:text-xl bg-green-400 text-green-600 font-bold rounded-md outline-none border border-green-600 inline-block">
      {text}
    </button>
  );
};

export default Button;
