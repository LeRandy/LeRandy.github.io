import React from 'react';
import FlipCard from '../../../FlipCard';
import Showcase from '../../../Showcase';
import Subheading from '../../../Subheading';

function FlipFade() {
    return (
        <div>
            <Subheading>Flip Card</Subheading>
            <p>I love dogs, I have 2 of them. This is Choji, he's a 9 year-old purebred Chihuahua.</p>
            <Showcase footnote={ `flip card: react-spring` }>
                <FlipCard
                    front={ `//im.vsco.co/aws-us-west-2/148dbe/66644364/5fb6ddd301d61e328c000001/vsco5fb6ddd565f63.jpg?w=920&dpr=1` }
                    back={ `https://image-aws-us-west-2.vsco.co/148dbe/66644364/5ee166be01d61e6c15000001/1136x1136/vsco5ee1667c88757.jpg` }
                />
            </Showcase>
        </div>
    )
}

export default FlipFade;