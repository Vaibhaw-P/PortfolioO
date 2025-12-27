import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="w-full group">
        <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
          {label}
        </label>
        <input
          ref={ref}
          className={`
            w-full bg-transparent border-b-2 border-muted 
            py-4 text-2xl font-display font-medium text-foreground
            focus:outline-none focus:border-primary
            placeholder:text-muted-foreground/20
            transition-all duration-300
            ${className}
          `}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";
