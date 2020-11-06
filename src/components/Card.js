import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Card.scss'

function Card( cardProps ) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 80 } }))

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 60, (x - window.innerWidth / 2) / 60, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const style = cardProps.style ? { width: cardProps.style.width, height: cardProps.style.height } : {};

  return (
    <animated.img
      src={ cardProps.image }
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans), ...style } }
    >
    </animated.img>
  )
}

export default Card;