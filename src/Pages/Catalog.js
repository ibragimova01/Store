import React, { Component } from "react";
import ProductList from "../Components/products/list";
import {connect} from "react-redux";
import Search from "../Components/search/search"

class Catalog extends Component {
  render() {
    const { products } = this.props
    return (
      <div className="container">
        <div className="row">
      <Search/>
      </div>
        <ProductList products={products}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products
  }
}

export default connect(mapStateToProps)(Catalog)