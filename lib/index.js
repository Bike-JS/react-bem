import React, { useMemo } from 'react';

const BEM = (block) => (elem, mods) => {
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

export const useBEM = (block) => useMemo(() => BEM(block), [block]);

export default (block) => (Component) => (props) => {
    const bem = useBEM(block);

    return React.createElement(Component, { bem, ...props });
}
