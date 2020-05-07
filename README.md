# React BEM

This is help package for use BEM methodology in React components

## Install

`npm i -S @bikejs/react-bem`

## Usage

Example for use as decorator

```jsx harmony
import React from 'react';
import { BEM } from '@bikejs/react-bem';

@BEM('my-component')
export class Component extends React.PureComponent {
  render() {
    const { bem } = this.props;

    return (
      <section className={bem()}>
        <header className={bem('header')}>
          Header
        </header>
        <article className={bem('main', { mod: true, type: 'test' })}>
          Main
        </article>
      </section>
    );
  }
}
```

Example for use as hook

```jsx harmony
import React from 'react';
import { useBEM } from '@bikejs/react-bem';

export const MyComponent = () => {
  const bem = useBEM('my-component');

  return (
    <section className={bem()}>
      <header className={bem('header')}>
        Header
      </header>
      <article className={bem('main', { mod: true, type: 'test' })}>
        Main
      </article>
    </section>
  );
}
```
