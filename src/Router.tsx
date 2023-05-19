import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectList from "./pages/projectlist/ProjectList";
import Layout from "./Layout";
import ProjectDetail from "./pages/projectdetail/ProjectDetail";
// import Login from './pages/login/Login';
// import MainRouter from './MainRouter';

const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					{<Route path="/" element={<ProjectList />} />}
					{<Route path="/projects" element={<ProjectList />} />}
					{<Route path="/projects/:projectId" element= {<ProjectDetail />}/>}
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
