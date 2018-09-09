import * as React from 'react';
import { IBeer } from '../types/Beer';

export interface IBeerListProps {
	data:IBeer[],
	getBeers: () => {},
	getBeer: (id:string) => {}
}

export default class BeerList extends React.Component<IBeerListProps> {
	public static defaultProps:Partial<IBeerListProps> = {
		data: [],
		getBeer: (id:string) => ({}),
		getBeers: () => ({}),
	}

	public constructor(props:any) {
		super(props);

		this._onChange = this._onChange.bind(this);
	}

	public componentDidMount() {
		this.props.getBeers();
	}

	public render() {
		const { data } = this.props;
		const beers = data.map((beer) => (<option key={ beer.name } value={ beer.id }>{ beer.name }</option>));

		return (
			<div>
				<select onChange={ this._onChange }>{ beers }</select>
			</div>
		);
	}

	private _onChange(evt:React.ChangeEvent):void {
		const selector:HTMLSelectElement = evt.currentTarget as HTMLSelectElement;

		this.props.getBeer(selector.value);
	}
}

