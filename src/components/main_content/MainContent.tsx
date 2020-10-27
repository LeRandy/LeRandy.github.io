import React, { useState } from 'react';
import ContentHandler from './ContentHandler';
import ContentNavigationMenu from './ContentNavigationMenu';
import './MainContent.scss';

interface State {
    content: string;
}

function MainContent() {
    const [content, setContent] = useState<string|null>( null );

    function handleMenuClick( content: string ) {
        setContent( content );
    }

    return (
        <div className={ `content-scroller` }>
            <ContentNavigationMenu handleMenuClick={ handleMenuClick }/>
            <div className={ `content` }>
                <ContentHandler/>
            </div>
        </div>      
    );
}

export default MainContent;