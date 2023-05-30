import { createElement, ReactNode } from 'react';


type ReactElementProps = {
  tag: (...props: unknown[]) => JSX.Element;
  children?: ReactNode | JSX.Element;
  [props: string]: any;
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function ReactElement({ tag, children, ...props}: ReactElementProps): JSX.Element {
  return createElement(tag, props, children);
}
