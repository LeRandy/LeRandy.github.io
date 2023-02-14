import React from 'react';
import FlipCard from '../../../FlipCard';
import ImageFade from '../../../ImageFade';
import Showcase from '../../../Showcase';
import Subheading from '../../../Subheading';

function FlipFade() {
    return (
        <div>
            <Subheading>Flip Card</Subheading>
            <p>This is Choji, he's an 11 year-old purebred Chihuahua.</p>
            <Showcase footnote={ `flip card: react-spring` } interaction={`Click to Flip`} fitContent={ true }>
                <FlipCard
                    front={ `//im.vsco.co/aws-us-west-2/148dbe/66644364/5fb6ddd301d61e328c000001/vsco5fb6ddd565f63.jpg?w=920&dpr=1` }
                    back={ `https://image-aws-us-west-2.vsco.co/148dbe/66644364/5ee166be01d61e6c15000001/1136x1136/vsco5ee1667c88757.jpg` }
                />
            </Showcase>
            <br/>
            <Subheading>Image Fade</Subheading>
            <p>This is Nala, she was Choji's half-sister.</p>
            <Showcase header={ `image fade: react-spring` }>
                <ImageFade slides={ [`//im.vsco.co/aws-us-west-2/148dbe/66644364/60355dd901d61e2015000002/vsco60355ddc6ac1c.jpg?w=594&dpr=1`,
                                     `//im.vsco.co/aws-us-west-2/148dbe/66644364/60355def01d61e2015000005/vsco60355df280cdd.jpg?w=977&dpr=1` ] 
                                }
                />
            </Showcase>
        </div>
    )
}

export default FlipFade;