import React, { Component } from 'react';

export class SinglePost extends Component {

mostrarPost =(props)=>{
		if (!props.post) return null;

		const {title,body,userId} = this.props.post;

		return(
				<div>
					<h1>{title}</h1>
					<p>Autor:{userId}</p>
					{body}
				</div>

		)

}
// debido que en algunos casos de la api no hay itulo debemos hacer una verificacion
// {this.mostrarPost(this.props)} le enviamos los props a la funcion mostrarPost
// if (!props.post) return null;  verificamos que el objeto siempre este lleno


	render() {



		return (
			<div className="col-12 col-md-8">
				{this.mostrarPost(this.props)}

			</div>
		);
	}
}

export default SinglePost;