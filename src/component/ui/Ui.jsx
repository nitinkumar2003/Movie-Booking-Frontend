

// @@input
export const Input = ({ type = 'text', placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border rounded-md px-4 py-2 ${className}`}
      {...props}
    />
  );
};


// @@ Button
export const Button = ({ size = 'md', variant = 'primary', children, className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none";
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}{...props} >
      {children}
    </button>
  );
};

// @@ BADGE
export const Badge = ({ children, variant }) => (
  <span className={`px-2 py-1 text-sm rounded ${variant === 'outline' ? 'border border-gray-300' : 'bg-gray-300'}`}>
    {children}
  </span>
);


export const Card = ({ children }) => (
  <div className="border rounded-lg shadow-md">{children}</div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);


// !AVATAR
export const Avatar = ({ children }) => (
  <div className="w-12 h-12 rounded-full overflow-hidden border">{children}</div>
);

export const AvatarImage = ({ src }) => (
  <img src={src} alt="avatar" className="w-full h-full object-cover" />
);

export const AvatarFallback = ({ children }) => (
  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">{children}</div>
);
