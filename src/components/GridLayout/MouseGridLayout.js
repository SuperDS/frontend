import { useMemo } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { GRID_COLS, GRID_MARGIN } from '../../styles/style';
import './MouseGrid.css';
import useWindowSize from './useWindowSize';

const ReactGridLayout = WidthProvider(RGL);

export default function MouseGridLayout(props) {
  const windowWidth = useWindowSize().width;
  const minRowHieght = useMemo(() => {
    if (windowWidth > 1124) {
      return (windowWidth - 170) / GRID_COLS;
    } else {
      return (1124 - 170) / GRID_COLS;
    }
  }, [windowWidth]);
  // rowHeight 공식 (width총길이 - margin * (col + 1)/ col)

  return (
    <ReactGridLayout
      layout={props.mylayout}
      className='layout mouse-layout'
      cols={GRID_COLS}
      rowHeight={minRowHieght}
      margin={GRID_MARGIN}
      compactType={null}
      preventCollision
      {...props}
    >
      {props.children}
    </ReactGridLayout>
  );
}
