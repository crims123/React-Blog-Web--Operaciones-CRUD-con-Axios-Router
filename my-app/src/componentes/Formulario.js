import React, { Component } from 'react';

export class Formulario extends Component {

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


	render() {
		return (
				<form className="col-8" onSubmit={this.crearPost} >
						<legend  className="text-center">Crear Nuevo Pos</legend>
					<div  className="form-group">
						<label>Titulo del Post:</label>
						<input ref={this.tituloRef}  className="form-control" type="text" name="" placeholder="Titulo Del Post"/>
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

export default Formulario;