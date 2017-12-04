import React, { Component } from 'react';

class InputParams extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      datastring: '16'
    };
  }

  onBlurDataset = (e) => {
    const {a, b} = this.props;
    const dataset = e.target.value.split(',').map(
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
        <p>Enter data values below and see the inference updates</p>
        <div className="Input-params-box">
          <p>Dataset (comma separated values between {a} to {b}): </p>
          <input
            type="text"
            value={datastring}
            onBlur={this.onBlurDataset}
            onChange={this.onChangeDataset}
          />
          <span className="Input-warn">(Invalid values will be filtered)</span>
        </div>
      </div>
    );
  }
}

export default InputParams;
