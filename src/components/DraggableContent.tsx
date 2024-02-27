import { useRef } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import clamp from 'lodash.clamp';
import swap from 'lodash-move';

import './DraggableContent.scss';

interface DraggableListProps {
  items: { backgroundImage: string, name: string }[]
}

function DraggableList( props: DraggableListProps ) {
  const items = props.items;

  const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 70 + y) / 70), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    api.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder
  })
  return (
    <div className={ "draggable-list" } style={{ height: items.length * 70 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => {
        return (
          <animated.div
          {...bind(i)}
          className={ `item` }
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            y,
            scale,
            backgroundImage: items[i].backgroundImage
          }}
          children={items[i].name}
        />
        );
      } ) }
    </div>
  );
}

const fn = (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) => (index: number) =>
  active && index === originalIndex
    ? {
        y: curIndex * 70 + y,
        scale: 1.1,
        zIndex: 1,
        shadow: 15,
        immediate: (key: string) => key === 'y' || key === 'zIndex',
      }
    : {
        y: order.indexOf(index) * 70,
        scale: 1,
        zIndex: 0,
        shadow: 1,
        immediate: false,
      };

export default DraggableList;
