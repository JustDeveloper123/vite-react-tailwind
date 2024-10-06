import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils/cn';
import classes from './Container.module.scss';

const containerVariants = cva(`mx-auto w-full`, {
  variants: {
    variant: {
      base: `max-w-container  ${classes.container}`,
      tablet: `max-w-tablet-768 ${classes.container_tablet}`,
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});

const Container = ({ variant, className, children, ...rest }) => {
  return (
    <div {...rest} className={cn(containerVariants({ variant }), className)}>
      {children}
    </div>
  );
};

export default Container;
