import React, { Component } from 'react';

class CategoriesInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: props.items,
            divClassName: "card bg-info text-white shadow"
        };
    };

    cardBgChanger() {
        this.setState({
            divClassName: "card bg-warning text-white shadow"
        }); 
    };


    render() {
        return (
            <div className="row">
                {/* <h1>working</h1> */}
                {this.state.values.map((item,i) => 
                    <div onClick={ () => this.cardBgChanger() } key={item+i} className="col-lg-6 mb-4">
                        <div className={this.state.divClassName}>
                            <div className="card-body">
                                {item.name}
                            </div>
                        </div>
                    </div>
                )}
    
            </div>
        );
    };
};

export default CategoriesInDb;
