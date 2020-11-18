import React from 'react';
import About from './content/about/About';
import FlipFade from './content/flip_fade/FlipFade';
import './ContentHandler.scss';

interface Props {
    content: string;
}

export function ContentHandler( props: Props ) {
    function renderContent() {
        switch ( props.content ) {
            case `About`: 
                return <About/>
            case `Flip Card & Image Fade`:
                return <FlipFade/>
        }
    }

    return (
        <div className={ `content-handler` }>
            <div className={ `title` }>{ props.content }</div>
            { renderContent() }
        </div>
    )
}

export let MenuItemOrder = [ `About`, `Flip Card`, `Masonry Grid`, `View Pager`, `Contact Information` ];