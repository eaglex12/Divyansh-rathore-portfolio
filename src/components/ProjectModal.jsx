import React from "react";
import ReactDOM from "react-dom";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const ProjectModal = ({ isOpen, onClose, project }) => {
	if (!isOpen) return null;

	const overlayStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: "rgba(0, 0, 0, 0.5)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: 1000,
	};

	const contentStyle = {
		background: "white",
		padding: "20px",
		borderRadius: "8px",
		width: "80%",
		maxWidth: "600px",
		maxHeight: "80%",
		position: "relative",
	};

	const closeButtonStyle = {
		position: "absolute",
		top: "10px",
		right: "10px",
		background: "none",
		border: "none",
		fontSize: "20px",
		cursor: "pointer",
	};

	const titleStyle = {
		fontSize: "24px",
		marginBottom: "10px",
	};

	const imageStyle = {
		width: "100%",
		height: "auto",
		marginBottom: "10px",
	};

	const descriptionStyle = {
		marginBottom: "20px",
	};

	const linksStyle = {
		display: "flex",
		flexDirection: "column",
	};

	const linkStyle = {
		color: "#007bff",
		textDecoration: "none",
		marginBottom: "10px",
	};

	return ReactDOM.createPortal(
		<div style={overlayStyle} onClick={onClose}>
			<div style={contentStyle} onClick={(e) => e.stopPropagation()}>
				<button style={closeButtonStyle} onClick={onClose}>
					X
				</button>
				<h2 style={titleStyle}>{project.title}</h2>
				<img src={project.imgUrl} alt={project.title} style={imageStyle} />
				<p style={descriptionStyle}>{project.description}</p>
				<div style={linksStyle}>
					{/* <a
						href={project.workUrl}
						target="_blank"
						rel="noreferrer"
						style={linkStyle}
					>
						View Live
					</a> */}
					<a
						href={project.workUrl}
						target="_blank"
						rel="noreferrer"
						style={{
							color: "#007bff",
							textDecoration: "none",
							fontSize: "18px",
							display: "flex",
							alignItems: "center",
						}}
					>
						<FaGithub style={{ marginRight: "8px" }} /> View Code
					</a>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default ProjectModal;
