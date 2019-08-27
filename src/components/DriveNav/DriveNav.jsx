import React from 'react';
import "./index.sass"

export default class DriveHeader extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <nav className="dirve-nav">
        <section>
          <div className="dirve-nav-breadcrumb">
            <a href="#" className="dirve-nav-title dirve-nav__first">MY DRIVE</a>
            <span>></span>
            <a href="#" className="dirve-nav-title">My Folder</a>
          </div>
          <div className="dirve-nav-control">
            <span className="dirve-nav-control-icon">
              <i className="material-icons">
                publish
              </i>
            </span>

            <span className="dirve-nav-control-icon">
              <i className="material-icons">
                create_new_folder
              </i>
            </span>
            <span className="dirve-nav-control-icon">
              <i className="material-icons">
                grade
              </i>
            </span>

            <span className="dirve-nav-control-icon">
              <i className="material-icons">
                get_app
              </i>
            </span>

            <span className="dirve-nav-control-icon">
              <i className="material-icons">
                grade
              </i>
            </span>

            <span className="dirve-nav-control-icon">
              <i className="material-icons">
                delete
              </i>
            </span>

            <span className="dirve-nav-control-icon">
              <i className="material-icons">
                link
              </i>
            </span>
          </div>

          {/* <div className="sharelink-block">
            <div className="sharelink-block-title">
              <span>share link</span>
              <i className="material-icons">
                clear
              </i>
            </div>
            <input type="text" />
            <div className="sharelink-block-btns">
              <button className="sharelink-block-btns__cancel">cancel</button>
              <button className="sharelink-block-btns__copy">copy</button>
            </div>
          </div> */}

        </section>
      </nav>
    )
  }
}