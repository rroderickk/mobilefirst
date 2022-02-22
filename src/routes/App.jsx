import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { useInitialState } from "@hooks/useInitialState";
import { Layout } from "@containers/Layout";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";

const App = () => {
	const initialState = useInitialState();

	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter basename="/mobilefirst">
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						{/* <Route exact path="/allcryptos" element={<AllCryptos />} /> */}

						{/* //todo ¡¡ InsertRoutes here !! */}

						<Route exact path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
};
export { App };