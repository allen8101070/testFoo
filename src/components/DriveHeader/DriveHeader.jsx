import React from 'react';
import "./index.sass"
import logo from "../../assets/logo.svg"
export default class DriveHeader extends React.Component {
    constructor() {
      super()
      this.state = {}
    }

    render() {
      return (
        <header className="dirve-header">
        <section>
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
            
            <ul className="dirve-header-nav">
                <li>
                    <a href="#">STARRED</a>
                </li>
                <li>
                    <a href="#">TRASH</a>
                </li>
                <li>
                    <a href="#">DEMO</a>
                </li>
            </ul>
            <label className="dirve-header-search">
                <input type="text" />
                <i className="material-icons">
                    search
                </i>
            </label>
        </section>
    </header>
      )
    }
  }