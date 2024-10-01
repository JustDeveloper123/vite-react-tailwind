import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils/cn';
import classes from './Container.module.scss';

const containerVariants = cva(`mx-auto w-full ${classes.container}`, {
  variants: {
    variant: {
      base: 'max-w-container',
      tablet: 'max-w-tablet-768',
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
