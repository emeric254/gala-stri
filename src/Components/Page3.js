import React, { Component } from 'react';

class Plat extends Component {
  render() {
    const titre = this.props.entry.titre;
    const description = this.props.entry.description;
    return (
      <div className="plat">
        <div className="subtitle">
          <p>
            {(titre) && titre.toUpperCase()}
          </p>
        </div>
        <div className="description">
          <p>
            {description}
          </p>
        </div>
      </div>
    )
  }
}

export default class Page3 extends Component {
  render() {
    const titre = this.props.data.titre;
    const description = this.props.data.description;
    let plats = "";
    if (this.props.data.plats) {
      plats = this.props.data.plats.map((entry, index) =>
        <Plat key={index} entry={entry} />
      );
    }
    return (
      <div id="page3">
        <div className="title">
          <p>
            {(titre) && titre.toUpperCase()}
          </p>
        </div>
        <div className="description">
          <p>
            {description}
          </p>
        </div>
        <div className="plats">
          {plats}
        </div>
      </div>
    )
  }
}
