function SelectInput(props) {
  return (
    <select className="form-select">
      {props.options.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
}

export default SelectInput;
