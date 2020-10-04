import React from 'react';
import CardCaller from './CardCaller.js';
import ContentRow from './ContentRow';
import DataTable from './DataTable';


let mainCards = [
    {
        borderClass: "card border-left-primary shadow h-100 py-2",
        title: "Products in Data Base",
        icon: "fas fa-clipboard-list fa-2x text-gray-300",
        symbol: '',
        fetchUrl: "http://localhost:3001/products/quantity",
    },
    {
        borderClass: "card border-left-success shadow h-100 py-2",
        title: "Amount in products",
        icon: "fas fa-dollar-sign fa-2x text-gray-300",
        symbol: '$',
        fetchUrl: "http://localhost:3001/products/price",
    },
    {
        borderClass: "card border-left-warning shadow h-100 py-2",
        title: "Users quantity",
        icon: "fas fa-user-check fa-2x text-gray-300",
        symbol: '',
        fetchUrl: "http://localhost:3001/users/quantity",
    }
];


function MainContainer(props) {
    return (
        <div className="container-fluid">

					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

                    <CardCaller 
                        items={mainCards} />
                    
                    <ContentRow />

                    <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>

                    <DataTable />
        </div>
    );
}

export default MainContainer;
