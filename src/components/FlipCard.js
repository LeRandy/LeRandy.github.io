import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './FlipCard.scss'

/**
 * props.back, props.front
 */

function FlipCard ( props ) {
  const [ flipped, set ] = useState( false );

  const { transform, opacity } = useSpring( {
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${ flipped ? 180 : 0 }deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  } );
  
  return (
    <div className={ `flip-card` }>
      <a.div 
        className="c front" 
        style={ { 
          opacity, 
          transform: transform.interpolate( t => `${t} rotateX(180deg)`),
          backgroundImage: url( props.front )
        } }
        onClick={ () => set( state => !state ) }
      />
      <a.div 
        className="c back" 
        style={ { 
          opacity: opacity.interpolate( o => 1 - o ), 
          transform,
          backgroundImage: url( props.back )
        } }
        onClick={ () => set( state => !state ) }
      />
    </div>
  )
}

export function url( address ) {
  return `url(` + address + `)`;
}

export default FlipCard;
