import axios from "axios";
import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Navbar/Navbar";
import "./product.css";

export default class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      location: "",
      price: 0,
      description: "",
      image: ""
    };
    this.state = { product: [] };
  }



  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      productName: this.state.productName,
      location: this.state.location,
      price: this.state.price,
      description: this.state.description,
      image: this.state.image,
    };
    console.log("Data to send", data);

    axios
      .post("http://localhost:4000/product/add", data)
      .then((res) => console.log(res.data));

    this.setState({
      productName: "",
      location: "",
      price: 0,
      description: "",
      image: ""
    });
  };

  reset() {
    const res = {
      productName: "",
      location: "",
      price: 0,
      description: "",
      image: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/product/")
      .then((response) => {
        this.setState({ product: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="MedicineContainer">
          <h2 className="product-header">Add Product</h2>
          <hr className="horizonalLine" />
          <div className="container">
            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
              <div className="messages"></div>
              <div className="controls">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                    <label for="form_name">Product Name</label>
                      <input
                        id="form_name"
                        type="text"
                        name="productName"
                        className="form-control"
                        placeholder="Enter Product Name"
                        required="required"
                        data-error="Name is required."
                        value={this.state.productName}
                        onChange={this.handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label for="form_name">Location</label>
                      <input
                        id="form_name"
                        type="text"
                        name="location"
                        className="form-control"
                        placeholder="Enter Location"
                        required="required"
                        data-error="Location is required."
                        value={this.state.location}
                        onChange={this.handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label for="form_name">Price</label>
                      <input
                        id="form_email"
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Enter Price"
                        required="required"
                        data-error="Price is required."
                        value={this.state.price}
                        onChange={this.handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label for="form_name">Description</label>
                      <input
                        id="form_name"
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Enter Description"
                        required="required"
                        data-error="Description is required."
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label for="form_name">Image</label>
                      <input
                        id="form_name"
                        type="file"
                        name="image"
                        className="form-control"
                        accept=".png, .jpg, .jpeg"
                        // required="required"
                        data-error="Description is required."
                        value={this.state.image}
                        onChange={this.handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="row">
                <div className="input-field col s12">
                  <button
                    type="reset"
                    className="Button-Reset"
                    onClick={this.reset()}
                  >
                    Clear
                  </button>
                  <input type="submit" className="Button-Add" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
