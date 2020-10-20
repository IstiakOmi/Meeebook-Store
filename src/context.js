import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

//Provider

//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  handleDetail = () => {
    console.log("Hello from detail");
  };

  addToCart = (id) => {
    console.log(`Hello from Cart. Id is:  ${id}`);
  };

  // tester = () => {
  //   console.log("Products from state:", this.state.products[0].inCart);
  //   console.log("Products from Data:", storeProducts[0].inCart);

  //   const tempProducts = [...this.state.products];
  //   tempProducts[0].inCart = true;
  //   this.setState(
  //     () => {
  //       return { products: tempProducts };
  //     },
  //     () => {
  //       console.log("Products from state:", this.state.products[0].inCart);
  //       console.log("Products from Data:", storeProducts[0].inCart);
  //     }
  //   );
  // };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
