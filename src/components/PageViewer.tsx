import React, { useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'

import './PageViewer.scss';

const pages = [
  'https://im.vsco.co/aws-us-west-2/148dbe/66644364/63e3eaf101d61e69d6000005/d53bcebf-9107-44e6-87f0-44831615a7cc1142555550289627243.jpg?w=930&dpr=1',
  'https://im.vsco.co/aws-us-west-2/148dbe/66644364/63e3ea6101d61e69d6000001/3b49a21e-feb7-43f3-94ce-38dd88b311f02341673428043107102.jpg?w=930&dpr=1',
  'https://im.vsco.co/aws-us-west-2/148dbe/66644364/63e3eac501d61e69d6000003/49afefc9-027c-497d-bfae-ac1c62fea9ea9187044043997179359.jpg?w=930&dpr=1',
]

function PageViewer() {
  const index = useRef(0)
  const [ref, { width }] = useMeasure()
  const [props, api] = useSprings(
    pages.length,
    i => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: i === 0 ? 'block' : 'none',
    }),
    [width]
  )
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > width / 2) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
      if ( cancel ) {
        cancel()
      }
    }
    api.start(i => {
      if (i !== index.current ) return { display: 'none' }
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - distance / width / 2 : 1
      return { x, scale, display: 'block' }
    })
  })
  return (
    <div ref={ref} className={ "page-viewer-wrapper" }>
      {props.map(({ x, display, scale }, i) => (
        <animated.div className={ "page" } {...bind()} key={i} style={{ display, x }}>
          <animated.div style={{ scale, backgroundImage: `url(${pages[i]})` }} />
        </animated.div>
      ))}
    </div>
  )
}

export default PageViewer;
