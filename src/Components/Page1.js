import React, { Component } from 'react';

export default class Page1 extends Component {
  render() {
    const titre = this.props.data.titre;
    const description1 = this.props.data.description1;
    const description2 = this.props.data.description2;
    return (
      <div id="page1">
        <div className="title">
          <p>
            {(titre) && titre.toUpperCase()}
          </p>
        </div>
        <div className="description description1">
          <p>
            {description1}
          </p>
        </div>
        <div className="description description2">
          <p>
            {description2}
          </p>
        </div>
      </div>
    )
  }
}
