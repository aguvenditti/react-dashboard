import React from 'react';
import Footer from './Footer.js'
import TopBar from './TopBar.js';
import DataTable from './DataTable.js';


function ContentWrapper(props) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">
                <TopBar />
                <DataTable />
            </div>

            <Footer />

        </div>
    );
}

export default ContentWrapper;
