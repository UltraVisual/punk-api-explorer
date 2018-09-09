import * as React from 'react';
import { IBeer } from '../types/Beer';

export interface IBeerInfoProps {
    beer:IBeer
}

export default class BeerInfo extends React.Component<IBeerInfoProps, any> {
  public render() {
    return (
      <div>{ this.props.beer.name }</div>
    ); 
  }
}
