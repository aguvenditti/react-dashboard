import React from 'react';

function CategoriesInDb(props) {
    return (
        <div className="row">

            {props.items.map((item,i) => 
                <div key={item+i} className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                        <div className="card-body">
                            {item}
                        </div>
                    </div>
                </div>
            )}

        </div>


    )
}

export default CategoriesInDb;
