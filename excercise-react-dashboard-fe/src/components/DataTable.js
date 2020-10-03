import React from 'react';
import TableItem from './TableItem.js';

let tableData = [
    {
        name: 'Tiger Nixon',
        description: 'System Architect',
        price: '320,800',
        categories: ['Category 01', 'Category 02', 'Category 03'],
        colors: [
            {name:'Red', className: "text-danger"}, {name:'Blue', className: "text-primary"}, {name:'Green', className: "text-success"}
        ],
        stock: '245' 
    },
    {
        name: 'Jane Doe',
        description: 'Fullstack developer',
        price: '320,800',
        categories: ['Category 01', 'Category 02', 'Category 03'],
        colors: [
            {name:'Red', className: "text-danger"}, {name:'Blue', className: "text-primary"}, {name:'Green', className: "text-success"}
        ],
        stock: '3500' 
    }
];


function DataTable(props) {
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

                                    <TableItem data={tableData}/>

								</table>
							</div>
						</div>
					</div>
    );
}

export default DataTable;
