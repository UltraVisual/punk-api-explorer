import * as React from "react";
import BeerInfoContainer from './components/BeerInfoContainer';
import BeerListContainer from "./components/BeerListContainer";

export interface IAppProps {
    title: string,
    message: string,
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <hr />
        <p>{this.props.message}</p>
        <BeerListContainer />
        <BeerInfoContainer />
      </div>
    );
  }
}

export default App;