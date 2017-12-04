import React, { Component } from 'react';
import Chart from './Chart';
import InputParams from './InputParams';
import Explainer from './Explainer';
import getHypotheses from '../utils/hypotheses';
import '../../css/App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dataset: [16],
      a: 1,
      b: 100
    };
  }

  onUpdate = (dataset) => {
    this.setState({dataset});
  };

  render() {
    const {dataset, a, b} = this.state;
    const hypothesesList = getHypotheses(dataset, a, b);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bayesian Learning Demo</h1>
          <p className="App-subtitle">
            Code: <a href='https://github.com/activatedgeek/bayesian-learning-demo'>activatedgeek/bayesian-learning-demo</a>
          </p>
          <p className="App-subtitle">
            Supporting Blog Post: <a href='https://www.sanyamkapoor.com//machine-learning/the-beauty-of-bayesian-learning/'>The Beauty of Bayesian Learning</a>
          </p>
        </header>
        <InputParams a={a} b={b} onUpdate={this.onUpdate} />
        <Explainer data={hypothesesList} />
        <div className="Chart-group">
          <div className="Chart">
            <p>Prior</p>
            <div><Chart data={hypothesesList} x="title" y="prior" /></div>
          </div>
          <div className="Chart">
            <p>Likelihood</p>
            <Chart data={hypothesesList} x="title" y="likelihood" />
          </div>
          <div className="Chart">
            <p>Posterior</p>
            <Chart data={hypothesesList} x="title" y="posterior" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
