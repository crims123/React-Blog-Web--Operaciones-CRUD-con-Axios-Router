import React, { Component } from 'react';
import {Link} from "react-router-dom";
export class Post extends Component {
	render() {

const {id,title,body} =this.props.info;
//creamos la tabla y usamos un link para el boton que va a redirigir a cada psot unico

		return (
			<tr>
				<td>{id}</td>
				<td>{title}</td>
				<td>
					<Link to={"/post/"+id} className="btn btn-primary">
					Ver</Link>
				</td>


				<td>
					<Link onClick={()=>{this.props.borrarPost(id)}}   to={"/editar/"+id} className="btn btn-warning">
					Editar</Link>
				</td>

				<td>
					<Link onClick={()=>{this.props.borrarPost(id)}}   to={"/"} className="btn btn-danger">
					Eliminar</Link>
				</td>


			</tr>
		);
	}
}

export default Post;