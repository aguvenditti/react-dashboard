import React from 'react';
import MainCard from './MainCard.js';
import ContentRow from './ContentRow';
import DataTable from './DataTable';



function MainContainer(props) {
    return (
        <div className="container-fluid">

					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					<div className="row">
                        <MainCard borderClass="card border-left-primary shadow h-100 py-2" title="Products in Data Base" value={135} icon="fas fa-clipboard-list fa-2x text-gray-300" />
                        <MainCard borderClass="card border-left-success shadow h-100 py-2" title="Amount in products" value="$546.456" icon="fas fa-dollar-sign fa-2x text-gray-300" />
                        <MainCard borderClass="card border-left-warning shadow h-100 py-2" title="Users quantity" value={38} icon="fas fa-user-check fa-2x text-gray-300" />
					</div>
                    
                    <ContentRow />

                    <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>

                    <DataTable />
        </div>
    );
}

export default MainContainer;
