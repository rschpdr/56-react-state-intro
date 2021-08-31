import React from "react";

import ProductCard from "./ProductCard";

class ProductList extends React.Component {
  state = {
    productList: [
      {
        img: "https://http2.mlstatic.com/D_Q_NP_2X_665688-MLA41960383655_052020-AB.webp",
        description:
          'Tablet Samsung Galaxy Tab A 2019 SM-T295 8" 32GB black com 2GB de memória RAM',
        price: 979,
      },
      {
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_781531-MLB46781157766_072021-F.webp",
        description:
          "Tênis Esportivo Masculino Olimp Caminhada Academia Original",
        price: 67.16,
      },
      {
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_612448-MLB47135323009_082021-F.webp",
        description: "Fritadeira Air Fry Britânia Bfr21p 1500w",
        price: 328.98,
      },
    ],
  };

  handleAscendingClick = () => {
    const clone = [...this.state.productList];

    clone.sort((a, b) => {
      return a.price - b.price;
    });

    this.setState({ productList: clone });
  };

  handleDescendingClick = () => {
    const clone = [...this.state.productList];

    clone.sort((a, b) => {
      return b.price - a.price;
    });

    this.setState({ productList: clone });
  };

  render() {
    return (
      <div className="row">
        <div className="mb-3">
          <h4>Ordenar Produtos</h4>
          <button
            onClick={this.handleAscendingClick}
            className="btn btn-primary me-3"
          >
            Preço Crescente
          </button>
          <button
            onClick={this.handleDescendingClick}
            className="btn btn-primary"
          >
            Preço De-crescente
          </button>
        </div>
        {this.state.productList.map((productObj) => {
          return (
            <ProductCard
              key={productObj.description}
              img={productObj.img}
              description={productObj.description}
              price={productObj.price}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
