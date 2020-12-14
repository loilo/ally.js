
// this builds up the UMD bundle

export * as element from './element/_element';
export * as event from './event/_event';
export * as fix from './fix/_fix';
export * as get from './get/_get';
export * as is from './is/_is';
export * as maintain from './maintain/_maintain';
export * as map from './map/_map';
export * as observe from './observe/_observe';
export * as query from './query/_query';
export * as style from './style/_style';
export * as when from './when/_when';
export { default as version } from './version';

// save current window.ally for noConflict()
const conflicted = typeof window !== 'undefined' && window.ally;

export function noConflict() {
  if (typeof window !== 'undefined' && window.ally === this) {
    window.ally = conflicted;
  }

  return this;
};
