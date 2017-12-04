import React, { Component } from 'react';

class InputParams extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      datastring: '16'
    };
  }

  onBlurDataset = () => {
    const {a, b} = this.props;
    const {datastring} = this.state;
    const dataset = datastring.split(',').map(
      (v) => window.parseInt(v, 10)).filter((v) => a <= v && v <= b);
    this.setState({dataset, datastring: dataset.join(',')});
    this.props.onUpdate(dataset);
  };

  onChangeDataset = (e) => {
    this.setState({datastring: e.target.value});
  };

  render() {
    const {datastring} = this.state;
    const {a, b} = this.props;
    return (
      <div className="Input-params">
        <div className="Input-params-box">
          <p>Dataset (comma separated values between {a} to {b}): </p>
          <input
            type="text"
            value={datastring}
            onChange={this.onChangeDataset}
          />
          <input className="Input-params-button" type="button" value="Test!" onClick={this.onBlurDataset} />
          <span className="Input-warn">(Invalid values will be filtered)</span>
        </div>
      </div>
    );
  }
}

export default InputParams;
