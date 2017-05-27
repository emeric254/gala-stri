import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const titre = this.props.data.titre;
    const description = this.props.data.description;
    return (
      <div id="contact">
        <div className="title">
          <p>
            {(titre) && titre.toUpperCase()}
          </p>
        </div>
        <div className="description">
          {description}
        </div>
      </div>
    )
  }
}
