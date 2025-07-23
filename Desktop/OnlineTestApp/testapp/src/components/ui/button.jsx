
export function Button({ children, onClick, className = '', ...props }) {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }