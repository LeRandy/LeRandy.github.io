import React, { useState } from 'react';
import { ContentHandler } from './ContentHandler';
import './MainContent.scss';
import ContentNavigationMenu from './navigation_menu/ContentNavigationMenu';

export const contentItems = [ `About` ];

function MainContent() {
    const [content, setContent] = useState( contentItems[0] );

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