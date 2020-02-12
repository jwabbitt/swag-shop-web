import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Product from '../product/product.js'
import WishList from '../wishlist/wishlist'

// Services
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {products:[]};

    // Bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(products => {
      self.setState({products: products});
    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map(product => 
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={product._id}>
        <Product product={product}/>
      </div>
    );
    return(list);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Swag Shop</h2>
          <div className="container-fluid App-main">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-md-7 col-sm-6 col-xs-12">
                <div className="row">
                {this.productList()}
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 col-md-5 col-sm-6 col-xs-12">
                <WishList />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
