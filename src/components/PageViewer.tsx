import React, { useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'

import './PageViewer.scss';

interface ViewerProps {
  pages: String[];
}

function PageViewer( viewerProps: ViewerProps ) {
  const { pages } = viewerProps

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
