import React from 'react';
import ContentNavigationMenu from './ContentNavigationMenu';
import './MainContent.scss';

function MainContent() {
    return (
        <div className={ `content-scroller` }>
            <ContentNavigationMenu/>
            <div className={ `content` }>
                Content In Progress
            </div>
        </div>      
    );
}

export default MainContent;