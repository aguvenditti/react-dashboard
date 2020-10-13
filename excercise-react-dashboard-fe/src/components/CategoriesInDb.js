import React, { Component } from 'react';

class CategoriesInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: props.items.map(element =>  
                ({...element, divClassName : "card bg-info text-white shadow"}) 
                ),
        };
    };

    cardBgChanger(currentClassName, index) {
        if(currentClassName === 'card bg-info text-white shadow') {
            this.state.values[index].divClassName = 'card bg-warning text-white shadow'
            this.forceUpdate() 
        } else {
            this.state.values[index].divClassName = 'card bg-info text-white shadow'
            this.forceUpdate() 
        };
        
    };


    render() {
        return (
            <div className="row">
                {this.state.values.map((item,i) => 
                    <div onClick={ () => this.cardBgChanger(item.divClassName, i) } key={item+i} className="col-lg-6 mb-4">
                        <div className={item.divClassName}>
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
