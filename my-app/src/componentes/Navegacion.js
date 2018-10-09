import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Navegacion.css";

class Navegacion extends Component {
	render() {
		return (
			<nav className="col-12 col-md-8">
	
				<Link to={"/"}>Todos los Posts</Link>
				<Link to={"/crear"}>Crear nuevos Posts</Link>                                                               
			</nav>
		);
	}
}

export default Navegacion;