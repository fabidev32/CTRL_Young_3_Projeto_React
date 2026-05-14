import "./input.css";

export default function Campo({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange} 
      className="input_customizado"
    />
  );
}