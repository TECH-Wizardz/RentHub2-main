
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import product from './product/product';
import productList from './product/productList';
import updateProduct from './product/updateProduct';
import Register from './user/register';
import Login from './user/login';
import home from './product/home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={product} />
      <Route path='/home'  component={home} />
      <Route path='/productList' component={productList}/>
      <Route path='/updateProduct' component={updateProduct}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
