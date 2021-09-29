export default function Typography({ children, type, className }) {
  switch (type) {
    case 'primary': {
      return (
        <h1
          className={`font-bold text-xl text-gray-700 capitalize ${className}`}
        >
          {children}
        </h1>
      );
    }
    case 'description': {
      return (
        <p className={`text-xs text-gray-400 font-base ${className}`}>
          {children}
        </p>
      );
    }
  }
}
