import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component {...props} {...route.props} />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
