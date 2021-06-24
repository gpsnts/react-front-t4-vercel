import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import ProdutoList from "./components/Produto/ProdutoList"
import Produto from "./components/Produto/Produto";
import {ApplicationProvider} from "./providers/ApplicationContext"
import Estoque from "./components/Estoque/Estoque";
import EstoqueList from "./components/Estoque/EstoqueList";
import PedidoList from "./components/Pedido/PedidoList";
import Pedido from "./components/Pedido/Pedido";


ReactDOM.render(
	<React.StrictMode>
		<ApplicationProvider>
			<Dashboard />
				<Router>
					<Switch>
						<Route path="/estoque/new" exact>
							<Estoque />
						</Route>
						<Route path="/estoque" exact>
							<EstoqueList />
						</Route>
						<Route path="/produto" exact>
							<ProdutoList />
						</Route>
						<Route path="/produto/new" exact>
							<Produto />
						</Route>
						<Route path="/pedido" exact>
							<PedidoList />
						</Route>
						<Route path="/pedido/new" exact>
							<Pedido />
						</Route>
						<Route path="/produto/edit/:produto_id">
							<Produto />
						</Route>
						<Route path="/">
						</Route>
					</Switch>
				</Router>
		</ApplicationProvider>
	</React.StrictMode>,
	document.getElementById("root")
);