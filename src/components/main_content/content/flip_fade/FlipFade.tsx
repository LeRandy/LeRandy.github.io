import React from 'react';
import FlipCard from '../../../FlipCard';
import Showcase from '../../../Showcase';
import Subheading from '../../../Subheading';

function FlipFade() {
    return (
        <div>
            <Subheading>*IN PROGRESS*</Subheading>
            <Showcase footnote={ `flip card: react-spring` }>
                <FlipCard/>
            </Showcase>
        </div>
    )
}

export default FlipFade;