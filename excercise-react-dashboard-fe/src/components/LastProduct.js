import React, { Component } from 'react';

class LastProduct extends Component {

    constructor() {
        super();
        this.state = {
            lastProduct: ''
        };
    };

    componentDidMount() {
        fetch('http://localhost:3001/products/last')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                lastProduct: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    };


    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="images/product_dummy.svg" alt="dummy"></img>
                        </div>
                        <p> {this.state.lastProduct.name} - {this.state.lastProduct.description} </p>
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </div>
                </div>
        );
    };
    
};

export default LastProduct;
