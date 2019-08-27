import React from 'react';
import "./index.sass"

export default class DriveHeader extends React.Component {
  constructor() {
    super()
    this.state = {}
	}
	render() {
    return (
      <footer className="dirve-footer">
        <section>
					<div className="dirve-footer-left">
					<span className="dirve-footer-title">storage</span>
					<span className="dirve-footer-title__first-size">16 gb</span>
					<span>/</span>
					<span>200 gb</span>
					</div>
				</section>
      </footer>
    )
  }
}