export function ButtonPrimary({ type, innerContent }) {
  return (
    <button type={type} className="bg-primary font-buttons text-base rounded-lg text-white text-center py-2 w-full hover:bg-light hover:text-primary hover:border-primary hover:border">
      {innerContent}
    </button>
  );
}
