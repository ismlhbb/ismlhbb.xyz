declare module 'react-scroll' {
  import * as React from 'react';

  interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    activeClass?: string;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export class Link extends React.Component<LinkProps> {
    static defaultProps: LinkProps;
  }

  // Add other components as needed
  export function Element(props: any): JSX.Element;
  export function scroller(): any;
  export function Events(): any;
}
