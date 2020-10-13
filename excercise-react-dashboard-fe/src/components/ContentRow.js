import React, { Component } from 'react';
import LastProduct from './LastProduct';
import CategoriesInDb from './CategoriesInDb';

class ContentRow extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            categories: ''
        };
    };

    componentDidMount() {
        fetch('http://localhost:3001/products/categories')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        categories: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                },
            )
    };

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="row">
                    <LastProduct />
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Categories in DataBase</h6>
                            </div>
                            <div className="card-body">
                                <CategoriesInDb items={this.state.categories} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
    };
};

export default ContentRow;
