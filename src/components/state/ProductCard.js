function ProductCard(props) {
  return (
    <div className="col-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt={props.description} />
        <div className="card-body">
          <h5 className="card-title">
            R$ {props.price.toString().replace(".", ",")}
          </h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
