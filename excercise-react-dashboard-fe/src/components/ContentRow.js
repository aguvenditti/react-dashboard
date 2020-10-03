import React from 'react';
import LastProduct from './LastProduct';
import CategoriesInDb from './CategoriesInDb';

const categories = ["Category 01", "Category 02", "Category 03", "Category 04", "Category 05", "Category 06"];

function ContentRow(props) {
    return (
        <div className="row">
            <LastProduct />
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                            <CategoriesInDb 
                                items={categories} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContentRow;
