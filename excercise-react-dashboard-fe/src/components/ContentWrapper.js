import React from 'react';
import Footer from './Footer.js'
import MainContent from './MainContent.js';


function ContentWrapper(props) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <MainContent />
            <Footer />

        </div>
    );
}

export default ContentWrapper;
