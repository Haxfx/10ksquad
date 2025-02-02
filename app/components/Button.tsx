'use client';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    className?: string;
  }
  
  const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    onClick,
    className = '' 
  }: ButtonProps) => {
    const baseStyles = "rounded-full font-medium transition-all duration-200";
    
    const variants = {
      primary: "bg-pink-400 hover:bg-pink-500",
      secondary: "bg-purple-900 hover:bg-purple-800"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;