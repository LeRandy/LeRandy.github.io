import React, { useState } from 'react';
import { ContentHandler } from './ContentHandler';
import './MainContent.scss';
import ContentNavigationMenu from './navigation_menu/ContentNavigationMenu';

const defaultContent = `About`;

function MainContent() {
    const [content, setContent] = useState( defaultContent );

    function handleMenuClick( content:any ) {
        setContent( content );
    }

    return (
        <div className={ `content-scroller` }>
            { ContentNavigationMenu( content, handleMenuClick ) }
            <div className={ `content` }>
                <ContentHandler content={ content }/>
            </div>
        </div>      
    );
}

export default MainContent;