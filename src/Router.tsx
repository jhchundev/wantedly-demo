import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectList from "./pages/projectlist/ProjectList";
import Layout from "./Layout";
// import Login from './pages/login/Login';
// import MainRouter from './MainRouter';

const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					{<Route path="/" element={<ProjectList />} />}
					{<Route path="/projects" element={<ProjectList />} />}
					{/* <Route path="/*" element={<MainRouter />} /> */}
					{<Route path="/project/:id" />}
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
