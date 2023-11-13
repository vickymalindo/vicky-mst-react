import { ContainerProps } from '../../types/Container';

const Container = ({ children, className }: ContainerProps) => {
  return <section className={className}>{children}</section>;
};

export default Container;
