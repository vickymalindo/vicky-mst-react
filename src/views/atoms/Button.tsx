import { ButtonProps } from '../../types/Button';
import { Button as ButtonUI } from '@material-tailwind/react';

const Button = ({ text }: ButtonProps) => {
  return <ButtonUI>{text}</ButtonUI>;
};

export default Button;
