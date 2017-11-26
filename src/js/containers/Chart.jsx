import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {VictoryChart, VictoryAxis, VictoryBar, VictoryTheme} from 'victory';

class Chart extends Component {
  render() {
    const {data, x, y} = this.props;
    return (
      <VictoryChart
        padding={{top: 0, bottom: 0, left: 30, right: 0}}
        domainPadding={10}
        theme={VictoryTheme.material}
        animate={{
          duration: 750,
          onLoad: { duration: 1000 }
        }}
      >
          <VictoryAxis
            dependentAxis
            tickFormat={data.map((d, i) => (i + 1).toString())}
          />
          <VictoryBar
            horizontal
            data={data}
            x={x}
            y={y}
          />
      </VictoryChart>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired
};

export default Chart;
