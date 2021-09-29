import IRoute from "./interfaces/routes";
import Home from "./pages/Home";
import Overview from "./pages/Overview";

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Overview',
    component: Overview,
    exact: true
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    exact: true
  }
]

export default routes;