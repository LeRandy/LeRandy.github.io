import { useState } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';

import './NestedBoxes.scss';

interface Props {
    initialImage?: any;
    data: Object[];
}

function NestedBoxes( props: Props ) {
  const [open, set] = useState(false)

  console.log( props.initialImage );

  const data = props.data;

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '35%' },
    to: {
      size: open ? '100%' : '35%',
      backgroundImage: open ? 'none' : `url(https://www.edigitalagency.com.au/wp-content/uploads/NBA-logo-png.png)`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div className={ `nested-boxes` }>
        <div className={ `wrapper` }>
            <animated.div
                style={{ ...rest, width: size, height: size }}
                className={ `container` }
                onClick={() => set(open => !open)}
                >
                {transition((style: any, item:any) => (
                    <animated.div
                        className={ `item` }
                        style={{ ...style, backgroundImage: item.background }}
                    />
                ))}
            </animated.div>
        </div>
    </div>
    
  )
}

export default NestedBoxes;