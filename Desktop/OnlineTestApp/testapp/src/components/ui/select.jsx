// src/components/ui/select.jsx
export function Select({ children, ...props }) {
    return (
      <select
        className="border border-gray-300 rounded px-3 py-2 w-full"
        {...props}
      >
        {children}
      </select>
    );
  }
  
  export function SelectItem({ value, children }) {
    return <option value={value}>{children}</option>;
  }
  