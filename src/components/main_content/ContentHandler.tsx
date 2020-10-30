import React, { useEffect, useState } from 'react';
import About from './content/About';
import './ContentHandler.scss';

interface Props {
    content: string;
}

function ContentHandler( props: Props ) {
    function renderContent() {
        switch ( props.content ) {
            case `About`: 
                return <About/>
        }
    }

    return (
        <div className={ `content-handler` }>
            <div className={ `title` }>{ props.content }</div>
            { renderContent() }
        </div>
    )
}

export default ContentHandler;