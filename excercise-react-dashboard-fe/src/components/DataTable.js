import React, { Component } from 'react';
import TableItem from './TableItem.js';

class DataTable extends Component {

    constructor() {
        super();
        this.state = {
            tableData: []
        };
    };

    componentDidMount() {
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              tableData: result
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
            <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" >
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                                <th>Categories</th>
                                                <th>Colors</th>
                                                <th>Stock</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                                <th>Categories</th>
                                                <th>Colors</th>
                                                <th>Stock</th>
                                            </tr>
                                        </tfoot>
    
                                        <TableItem data={this.state.tableData}/>
    
                                    </table>
                                </div>
                            </div>
                        </div>
        );
    };
    
}

export default DataTable;
