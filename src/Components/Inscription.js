import React, { Component } from 'react';

export default class Inscription extends Component {
  render() {
    const titre = this.props.data.titre;
    const description = this.props.data.description;
    const bouton = this.props.data.bouton;
    return (
      <div id="inscription">
        <div className="title">
          <p>
            {(titre) && titre.toUpperCase()}
          </p>
        </div>
        <div className="description">
          {description}
        </div>
        <button className="btn_inscription">
          {(bouton) && bouton.toUpperCase()}
        </button>
      </div>
    )
  }
}
