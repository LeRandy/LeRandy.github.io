import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Transition.scss'

/**
 * transitionProps {
 *  isLocal: boolean; // used to determine whether or not to use require for img src
 *  images: [string]; // list of img srcs
 * }
 */
function Transition( transitionProps ) {
    const pages = transitionProps.images.map( src => {
        if ( transitionProps.isLocal ) {
            return (
                ({ style }) => <animated.img src={ require( "" + src )} style={{ ...style}}></animated.img>
            )
        } else {
            return (
                ({ style }) => <animated.img src={ src } style={{ ...style}}></animated.img>
            )
        }
    } );

    const [index, set] = useState(0);
    const onClick = useCallback(() => set( state => (state + 1) % transitionProps.images.length ), [ transitionProps.images.length ]);
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    return (
        <div className={ `transition-container` }>
            <div className="simple-trans-main" onClick={onClick}>
                { transitions.map( ( { item, props, key } ) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                } ) }
            </div>
        </div>
    )
}

export default Transition;