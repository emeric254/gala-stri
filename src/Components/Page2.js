import React, { Component } from 'react';

export default class Page2 extends Component {
  render() {
    const titre = this.props.data.titre;
    const description = this.props.data.description;
    return (
      <div id="page2">
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
      </div>
    )
  }
}
