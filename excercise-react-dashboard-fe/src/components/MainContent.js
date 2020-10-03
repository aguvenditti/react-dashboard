import React from 'react';
import MainContainer from './MainContainer';
import TopBar from './TopBar';


function MainContent(props) {
    return (
        <div id="content">
            <TopBar />
            <MainContainer />
					
        </div>
    );
}

export default MainContent;
