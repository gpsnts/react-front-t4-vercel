import "./style.css";
import React from "react";
import ReactDOM from "react-dom";

import Nav from "./components/Nav/Nav.tsx";
import Button from "./components/Button/Button.tsx";
import Alert from './components/Alert/Alert.tsx';

ReactDOM.render(
	<React.StrictMode>
		<Nav />
		<div className="container mt-5 mx-auto px-2">
			<Button />
			<Alert />
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);