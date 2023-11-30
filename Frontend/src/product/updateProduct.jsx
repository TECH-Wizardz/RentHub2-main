import axios from "axios";
import React, { Component } from "react";
import Swal from "sweetalert2";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Navbar/Navbar";

export default class updateProduct extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      productName: "",
      location: "",
      price: 0,
      description: "",
      products: [],
    };
  }

  async componentDidMount() {
    let id = this.props.location.id;
    console.log(id);
    await axios
      .get("http://localhost:4000/product/" + id)
      .then((result) => {
        this.setState({
          productName: result.data.productName,
          location: result.data.location,
          price: result.data.price,
          description: result.data.description,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      productName: this.state.productName,
      location: this.state.location,
      price: this.state.price,
      description: this.state.description,
    };
    let id = this.props.location.id;
    axios.post("http://localhost:4000/product/update/" + id, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Successfully Updated!",
      }).then(() => {
        window.location = "/productList";
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="MedicineContainer">
          <h2 className="product-header">Update Product</h2>
          <hr className="horizonalLine" />
          <div className="container">
            <form onSubmit={this.handleSubmit}>
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
              </div>
              <div className="clearfix"></div>
              <div className="row">
                <div className="input-field col s12">
                  <button type="submit" className="Button-Add">
                    <FontAwesomeIcon icon={faCheckCircle} /> Update Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
