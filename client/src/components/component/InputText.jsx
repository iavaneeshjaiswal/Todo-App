function InputText(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      name={props.Name}
      onChange={props.OnChange}
      placeholder={props.placeholder}
      className="w-4/5 p-3  rounded-lg outline-none border-2 border-zinc-400 focus:border-black w-full"
      required
    />
  );
}

export default InputText;
