import React from 'react';
import "./index.sass";
import excel from "../../assets/ic-excel.svg"
import pdf from "../../assets/ic-pdf.svg"
import ppt from "../../assets/ic-ppt.svg"
import word from "../../assets/ic-word.svg"
import unkown from "../../assets/ic-unkown.svg"
import image from "../../assets/ic-image.svg"

export default class DriveMain extends React.Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		const { folderData, fileData } = this.props
		return (
			<nav className="dirve-main">
				<section>
					<div className="dirve-main-header">
						<div className="dirve-main-title">folders</div>
						<div>
							<span>
								<i className="material-icons">
									view_list
								</i>
								<i className="material-icons">
									view_module
								</i>
							</span>
						</div>
					</div>
					{folderData.length !== 0 ? (
						<div className="dirve-main-container">
							{folderData.map(item => {
								return (
									<div className="folder-item" key={item.name}>
										<i className="material-icons">folder</i>
										<span>{item.name}</span>
									</div>
								)
							})}
						</div>
					) : null}

					<div className="dirve-main-header">
						<div className="dirve-main-title">files</div>
						<div>
							<span>
								<i className="material-icons">
									view_list
								</i>
								<i className="material-icons">
									view_module
								</i>
							</span>
						</div>
					</div>
					<div className="dirve-main-container">

						<div className="file-list-header">
							<div className="file-list-header-icon"></div>
							<div className="file-list-header-name">
								<span>name</span>
								<i className="material-icons">arrow_downward</i>
							</div>
							<div className="file-list-header-location">
								<span>location</span>
							</div>
							<div className="file-list-header-time">
								<span>last modified</span>
							</div>
							<div className="file-list-header-size">
								<span>size</span>
							</div>
						</div>

						{fileData.length !== 0 ? (
							fileData.map(item => {
								return (
									<div className="file-list-item" key={item.name}>
									<div className="file-list-item-icon">
										<img src={excel} alt="excel-icon" />
									</div>
									<div className="file-list-item-name">
										<span>{item.name}</span>
									</div>
									<div className="file-list-item-location">
										<span>my drive</span>
									</div>
									<div className="file-list-item-time">
										<span>2019/8/20</span>
									</div>
									<div className="file-list-item-size">
										<span>6 kb</span>
									</div>
								</div>
								)
							})
						)
							: null}
					</div>

				</section>
			</nav>
		)
	}
}
DriveMain.defaultProps = {
	folderData: [],
	fileData: [],
	dataLength: 0
}