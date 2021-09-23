import IRoute from "./interfaces/routes";
import Overview from "./pages/Overview";

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Overview',
    component: Overview,
    exact: true
  }
]

export default routes;