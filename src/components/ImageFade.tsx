import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import { url } from './FlipCard'
import './ImageFade.scss'

interface Props {
    slides: string[]
}

function ImageFade( props: Props ) {
    const [ index, set ] = useState( 0 );

    const slides = props.slides.map( (slide, index) => { return {id: index, url: slide} } )

    const transitions = useTransition( slides[ index ], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    } );

    useEffect( () => void setInterval( () => set( state => ( state + 1 ) % slides.length ), 4000 ), [] )

    return (
        <div className={ `image-fade` }>
            { transitions.map( ( { item, props, key }, index ) => (
                <animated.div
                    key={ key }
                    className={`bg ${ index === 0 ? `first` : `` }`}
                    style={ { ...props, backgroundImage: url(item.url) } }
                />
            ) ) }
        </div>
    )
}

export default ImageFade;