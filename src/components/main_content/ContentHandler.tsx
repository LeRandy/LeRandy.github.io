import React from 'react';
import Subheading from '../Subheading';
import About from './content/about/About';
import NestedContent from './content/nested_content/NestedContent';
import FlipFade from './content/flip_fade/FlipFade';
import LibrariesUsed from './content/libraries_used/LibrariesUsed';
import './ContentHandler.scss';
import ContactInformation from './content/contact_information/ContactInformation';

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
            case `Nested Content`:
                return <NestedContent/>
            case `Libraries Used`:
                return <LibrariesUsed/>
            case `Contact Information`:
                return <ContactInformation/>
            default:
                return <Subheading>*IN PROGRESS*</Subheading>
        }
    }

    return (
        <div className={ `content-handler` }>
            <div className={ `title` }>{ props.content }</div>
            { renderContent() }
        </div>
    )
}