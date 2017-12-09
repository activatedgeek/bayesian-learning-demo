import React, { Component } from 'react';

class Explainer extends Component {
  render() {
    const {data} = this.props;
    data.sort((a, b) => b.posterior - a.posterior);
    return (
      <div className="Explainer-box">
        <p>Our "<i>Bayesian</i>" friend proposes following concepts as top choices based on the posterior (interpreted as confidence)</p>
        <div className="Explainer-concepts">
          {
            data.slice(0, 5).map(({title, posterior}, i) =>
              <div className="Concept-box" key={i}>
                <span className="Concept-title">{title}</span>:
                <span className="Concept-confidence">{(posterior * 100.0).toFixed(2)}%</span>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Explainer;
