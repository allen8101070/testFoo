import React from 'react';
import "./index.css";

export default class DriveMain extends React.Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<nav className="dirve-main">
				<section>
					<div className="dirve-main-header">
						<div className="dirve-main-title">starred</div>
						<div>
							<span className="dirve-main-showall">show all</span>
						</div>
					</div>
					
					<div className="dirve-main-header">
						<div className="dirve-main-title">folders</div>
						<div>
							<span>
								<i class="material-icons">
									view_list
								</i>
								<i class="material-icons">
									view_module
								</i>
							</span>
						</div>
					</div>

					<div className="dirve-main-header">
						<div className="dirve-main-title">files</div>
						<div>
							<span>
								<i class="material-icons">
									view_list
								</i>
								<i class="material-icons">
									view_module
								</i>
							</span>
						</div>
					</div>
				</section>
			</nav>
		)
	}
}