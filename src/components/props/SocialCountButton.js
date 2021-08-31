import "./SocialCountButton.css";

function SocialCountButton(props) {
  return (
    <div className="input-group mb-3">
      <button className="btn btn-dark" type="button" id="button-addon1">
        <i className={props.icon}></i> {props.buttonText}
      </button>
      <input
        type="text"
        className="form-control count-input"
        placeholder=""
        value="0"
      />
    </div>
  );
}

export default SocialCountButton;
