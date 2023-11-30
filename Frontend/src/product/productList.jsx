import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./productList.css";
// import medicine from "./medicine";
import {
  faEdit,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import navbar from "../NavBar/navbar";
import Navbar from "../Navbar/Navbar";

export default class productList extends Component {
  state = {
    productName: "",
    location: "",
    price: 0,
    description: "",
    products: [],

    onClick:false
  };

  async componentDidMount() {
    const product = await axios
      .get("http://localhost:4000/product/")
      .then((result) => {
        this.setState({
          products: result.data,
        });
      });
  }

  delete(_id) {
    // let id=this.props.location.id;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Do you want to delete this product?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted",
            "Product has been deleted",
            "success"
          );
          axios
            .delete("http://localhost:4000/product/" + _id)
            .then(() => {
              this.componentDidMount();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled");
        }
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="col s9">
        <Navbar/>
        <div className="ReportRow">
              <Link to='/'><button className="addMedBtn">Add Product</button></Link>
          </div>
        <table className="responsive-table highlight">
          {/* <thead> */}
          <tr>
            <th className="td">Product Name</th>
            <th className="td">location</th>
            <th className="td">price</th>
            <th className="td">description</th>
            <th className="td"></th>
          </tr>
          {products.map((product) => {
            return (
              <tr 
              key={product._id}
              className="">
                <td>{product.productName}</td>
                <td>{product.location}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={{pathname: "/updateProduct/" ,id:product._id}} ><FontAwesomeIcon size="2x"
                    icon={faEdit}/></Link>
                  <FontAwesomeIcon
                    size="2x"
                    icon={faTrash}
                    onClick={(e) => this.delete(product._id)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
