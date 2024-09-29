import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils/cn';

const buttonVariants = cva(
  'group relative bg-primary inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-secondary transition hover:scale-110',
  {
    variants: {
      variant: {
        rounded: 'rounded-full border border-accent',
      },
    },
  },
);

const Button = ({ variant, lineColor, className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        buttonVariants({
          variant,
        }),
        className,
      )}
    >
      <span>{children}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div
          className="relative h-full w-8"
          style={{
            backgroundColor: lineColor || 'rgb(255, 255, 255, 0.2)',
          }}
        ></div>
      </div>
    </button>
  );
};

export default Button;
