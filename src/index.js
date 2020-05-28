import React, { useMemo } from 'react';

const camel2Dash = (value = '') => (
  value.replace(/([a-zA-Z])(?=[A-Z0-9])/g, '$1-').toLowerCase()
);

const BEMDecorator = (block) => (elem, mods) => {
  let base = block;

  if (!elem) {
    return block;
  }

  if (typeof elem === 'object') {
    mods = elem;
    elem = '';
  }

  if (elem !== '') {
    base = `${block}__${elem}`;
  }

  return base + (mods ? Object.entries(mods).reduce((target, [key, value]) => {
    if (!value) {
      return target;
    }

    target += ` ${value === true ? (`${base}_${key}`) : (`${base}_${key}_${value}`)}`;

    return target;
  }, '') : '');
};

const useBEM = (block) => useMemo(() => BEMDecorator(block), [block]);

const BEM = (block) => (Component) => (props) => {
  const bem = useBEM(block);

  return React.createElement(Component, { bem, ...props });
};

export { BEM, useBEM };
