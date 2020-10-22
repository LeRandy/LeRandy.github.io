import React from 'react';
import './ContentNavigationMenu.scss';

function ContentNavigationMenu() {
    const menuItems = [
        { top: "Back to the top" },
        { introduction: "Introduction" },
        { contactInformation: "Contact Info" },
        { libraries: "Libraries Used" }
    ]

    return (
        <div className={ `content-navigation-container` }>
            <div className={ `content-navigation-menu` }>
                { 
                    menuItems.map( ( menuItem ) => 
                        <a href={ `#${ Object.keys(menuItem) }` }>{ Object.values( menuItem ) }</a>
                    )
                }  
            </div>
        </div>
    );
}

export default ContentNavigationMenu;