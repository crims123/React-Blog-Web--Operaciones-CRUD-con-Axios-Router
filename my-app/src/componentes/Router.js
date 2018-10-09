import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"; // importamos las rutas
import axios from "axios";  // importamos axios
import Header from "./Header"; 
import Navegacion from "./Navegacion"; 
import Posts from "./Posts";
import SinglePost from "./SinglePost";
import Formulario from "./Formulario";
import swal from 'sweetalert2';
import Editar from "./Editar";
//En este proyecto vamos a usar la api de jsonplaceholders y fetch


class Router extends Component {


state = {
	posts:[],
}

//Montamos la api

componentDidMount(){
	this.obtenerPost(); // apenas empieza el programa ejecuta la funcion
}


obtenerPost = ()=>{

	// cargamos la api con axios con metodo get

	axios.get("https://jsonplaceholder.typicode.com/posts")
	.then(respuesta=>{
		//console.log(respuesta.data);
		this.setState({
			posts:respuesta.data,

		})	
	})


}

//Creamos la ruta principal y le enviamos la api a un componente llamado posts

/*IMPORTANTE para hacer que cada post se muestr individual hay que hacer un filtro

let idPost =props.location.pathname.replace("/post/","");

								const posts =this.state.posts;

								let filtro;

								filtro = posts.filter(post=>{
									post.id==idPost;

								})


osea  crea un filtro que dice que va a mostrar el post del id cuando sea igual al idpost 
de la url y ese filro lo envia por props al single post

	let idPost =props.location.pathname.replace("/post/","");

								const posts =this.state.posts;

								let filtro;

								filtro = posts.filter(post=>(
									post.id==idPost

								))


								return(
										<SinglePost post={filtro[0]} />
									)

asi envia solo los props del post asociado con la url que uno esta entrando despues lo envia al single
post y con un objeto destructor renderiza los datos de cada post

*/


//Para la parte de eliminar el post creamos un nuevo metodo y lo enviamos por props hasta el post individual

borrarPost=(id)=>{
	console.log(id);
	// segun la documentacion de la api  para poder borrar un post hay que usar esta sintaxis 	/posts/1
	// ya tenemos el id

	axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
	.then(respuesta=>{

		//console.log(respuesta) // la api nos da la respuesta de borrar ese post

		// creamos una copia del estado actual

		const posts = [...this.state.posts];
		//creamos una variable resultado que va a filtrar los posts

		let resultado = posts.filter(post=>(
					post.id!=id //fitra que el id del post de diferente del id que se le da click en borrar
					// esto mostraria todos los que no se han borrado

			))
		//luego cambiamos el estado

		this.setState({
			posts:resultado,
		})
	})
}

// le devoldemos el contenido del formulario al metodo crearPost

crearPost =(post)=>{

	// con axios y segun el api podemos crear un post nuevo al usar post

	axios.post(`https://jsonplaceholder.typicode.com/posts`,{post}) 
	// va a crearlo con el objeto recibido post
	.then(respuesta=>{

		if (respuesta.status===201) {

							swal(
				  'Post Creado!',
				  'Satisfactoriamente!',
				  'success'
				)

	}

			let postId= {id:respuesta.data.id};
			const nuevoPost=Object.assign({},respuesta.data.post,postId); //se 
			// uno object assign para unir los 2 objetos en uno solo


			// ya teniendo los datos actualizamos el estado

			this.setState(prevState=>({
				posts:[...prevState.posts,nuevoPost], // hace una coppia del estado anterior de los posts 
				// y luego le agrega el nuevo post
				}))
			}
		)


	

}

	render() {
		return (
		
		<BrowserRouter>
			<div className="container">
					<div className="row justify-conten-center">
						<Header/>
						<Navegacion/>
							<Switch>
								<Route exact path="/" render={()=>{
								return(
										<Posts posts={this.state.posts} borrarPost={this.borrarPost} />
									)

								}}  />

							<Route exact path="/post/:postID" render={(props)=>{

								let idPost =props.location.pathname.replace("/post/","");

								const posts =this.state.posts;

								let filtro;

								filtro = posts.filter(post=>(
									post.id==Number(idPost)

								))


								return(
										<SinglePost post={filtro[0]} />
									)

								}}  />

								<Route exct path="/crear"  render={()=>{
								return(
										<Formulario crearPost={this.crearPost}  />
									)

								}}  />


								<Route exact path="/editar/:postID" render={(props)=>{

								let idPost =props.location.pathname.replace("/editar/","");

								const posts =this.state.posts;

								let filtro;

								filtro = posts.filter(post=>(
									post.id==Number(idPost)

								))


								return(
										<Editar post={filtro[0]} />
									)

								}}  />



							</Switch>
					</div>
			</div>
		</BrowserRouter>
		
		)
	}
}


export default Router;
