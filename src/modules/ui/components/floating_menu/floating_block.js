import React from 'react';
import { colorScheme, floating } from '../theme';
import { boxPositions } from '../../../../libs/menu_positions';

const rootStyle = {
  position: 'absolute',

  backgroundColor: colorScheme.block,
  borderRadius: '4px 4px 0px 0px',
  paddingBottom: 2,
  ...floating,
};

function getPosition(pos) {
  switch (pos) {
    case boxPositions.BOTTOM_RIGHT:
      return {
        right: 10,
        bottom: 20,
      };
    case boxPositions.TOP_LEFT:
      return {
        left: 10,
        top: 20,
      };
    case boxPositions.TOP_RIGHT:
      return {
        right: 10,
        top: 20,
      };
    default:
      return {
        left: 10,
        bottom: 20,
      };
  }
}

const FloatingBlock = ({ position, children }) => (
  <div style={{ ...rootStyle, ...getPosition(position) }}>
    {children}
  </div>
);

FloatingBlock.propTypes = {
  position: React.PropTypes.string,
  children: React.PropTypes.element,
};

export default FloatingBlock;