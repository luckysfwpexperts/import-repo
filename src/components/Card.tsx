import React from 'react';

export interface CardProps {
  /**
   * Card title
   */
  title: string;
  /**
   * Card description
   */
  description?: string;
  /**
   * Card variant
   */
  variant?: 'default' | 'outlined' | 'elevated';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * A reusable Card component built with Tailwind CSS
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  variant = 'default',
  onClick,
  ...props
}) => {
  const baseClasses = 'p-6 rounded-lg transition-all duration-200 cursor-pointer';
  const variantClasses = {
    default: 'bg-white border border-gray-200 hover:shadow-md',
    outlined: 'bg-transparent border-2 border-blue-500 hover:bg-blue-50',
    elevated: 'bg-white shadow-lg hover:shadow-xl border border-gray-100',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      {...props}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
};
