import React, { useState } from 'react';
import ContentHandler from './ContentHandler';
import './MainContent.scss';
import ContentNavigationMenu from './navigation_menu/ContentNavigationMenu';

interface State {
    content: string;
}

export const contentItems = [ `About` ];

function MainContent() {
    const [content, setContent] = useState( contentItems[0] );

    function handleMenuClick( content:any ) {
        setContent( content );
    }

    return (
        <div className={ `content-scroller` }>
            {/* <ContentNavigationMenu handleMenuClick={handleMenuClick}/> */}
            { ContentNavigationMenu(content, handleMenuClick) }
            <div className={ `content` }>
                <ContentHandler content={ content }/>
            </div>
        </div>      
    );
}

export default MainContent;