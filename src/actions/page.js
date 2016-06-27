import { push } from 'react-router-redux';

export function pageUp(index, total) {
  return {
    type: 'PAGE_UP',
    index: index,
    total: total,
    direction: 'up'
  };
}

export function pageDown(index, total) {
  return {
    type: 'PAGE_DOWN',
    index: index,
    total: total,
    direction: 'down'
  };
}
