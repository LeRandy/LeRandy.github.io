import React from 'react';
import './ContentNavigationMenu.scss';

interface Props {
    handleMenuClick: ( content: string ) => void;
}

function ContentNavigationMenu( props: Props ) {
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
                        <div className={`menu-item`} onClick={ () => props.handleMenuClick( Object.keys( menuItem )[0] ) }>{ Object.values( menuItem )[0] }</div>
                    )
                }  
            </div>
        </div>
    );
}

export default ContentNavigationMenu;