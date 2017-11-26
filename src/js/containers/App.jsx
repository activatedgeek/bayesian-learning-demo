import React, { Component } from 'react';
import Chart from './Chart';
import getHypotheses from '../utils/hypotheses';
import '../../css/App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      a: 1,
      b: 50
    };
  }

  componentWillMount() {
    const dataList = [[16],[1,2,3], [2,4,8], [10,20,30], [2,4,8,16]];
    const n = dataList.length;
    let i = 0;
    window.setInterval(() => {
      this.setState({data: dataList[i]});
      i = (i + 1) % n;
    }, 5000);
  }

  render() {
    const {data, a, b} = this.state;
    const hypothesesList = getHypotheses(data, a, b);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bayesian Learning Demo</h1>
          <p className="App-subtitle">Work in progress; See <a href='https://github.com/activatedgeek/bayesian-learning-demo'>activatedgeek/bayesian-learning-demo</a></p>
        </header>
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
