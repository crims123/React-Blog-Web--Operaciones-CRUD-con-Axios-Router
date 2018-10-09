import React, { Component } from 'react';

export class Editar extends Component {

//creamos los href

tituloRef= React.createRef();
entradaRef= React.createRef();

crearPost=(e)=>{
	e.preventDefault();

	const post ={
		title:this.tituloRef.current.value,
		body:this.entradaRef.current.value,
		userId:"1",
	}
	// le devolvemos al padre el contenido del post que se va acrear
	this.props.crearPost(post);
}


// creamos un destructor para cargar el titulo dentro del formulario

const {title} =this.props.post;
	render() {
		return (
				<form className="col-8" onSubmit={this.crearPost} >
						<legend  className="text-center">Editar Post</legend>
					<div  className="form-group">
						<label>Titulo del Post:</label>
						<input ref={this.tituloRef}  className="form-control" type="text" name="" 
						value={title}  />
					</div>

					<div  className="form-group">
						<label>Contenido:</label>
						<textarea ref={this.entradaRef}  className="form-control"></textarea>
					</div>

					<button type="submit" className="btn btn-primary">Crear</button>
				</form>

		
		);
	}
}

export default Editar;