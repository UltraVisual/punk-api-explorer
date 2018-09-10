import * as React from 'react';
import { INVALID_BEER_NAME } from '../constants/InitialBeer';
import { IBeer } from '../types/Beer';

export interface IBeerInfoProps {
    beer:IBeer
}

export default class BeerInfo extends React.Component<IBeerInfoProps, any> {
  public render():JSX.Element | null {
    const { beer } = this.props;

    return beer.name !== INVALID_BEER_NAME ? this._getBeerInfoMarkup(beer) : null; 
  }

  private _getBeerInfoMarkup(beer:IBeer):JSX.Element {
    return (
        <div>
          <h2>{ beer.name }</h2>
          <p>{ beer.description }</p>
        </div>
    )
  }
}
