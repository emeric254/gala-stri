import React, { Component } from 'react';

class MenuEntry extends Component {
  render() {
    const titre = this.props.entry.titre;
    const ref = this.props.entry.ref;
    return (
      <li className="menuItem">
        <a href={"#" + ref}>
          {titre.toUpperCase()}
        </a>
      </li>
    )
  }
}

export default class Menu extends Component {
  render() {
    const menuEntries = this.props.data.map((entry) =>
      <MenuEntry key={entry.ref} entry={entry} />
    );
    return (
      <div id="menu">
        <ul>
          {menuEntries}
        </ul>
      </div>
    )
  }
}
