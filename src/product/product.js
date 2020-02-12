import React, {Component} from 'react';
import './product.css';
import DataService from "../services/data-service";

let ds = new DataService();

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {onWishList: ds.itemOnWishList()};

        // Bind functions
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }
    

    onWishListChanged(newWishList) {
        this.setState({onWishList: ds.itemOnWishList(this.props.product)});
    }

    onButtonClicked = () => {
        if (this.state.onWishList) {
            ds.removeWishListItem(this.props.product);
        } else {
            ds.addWishListItem(this.props.product);
        }
    }

    render() {

        var btnClass;

        if (this.state.onWishList) {
            btnClass = "btn btn-danger";
        } else {
            btnClass = "btn btn-primary";
        }

        return(
            <div className="card product">
                <div className="image">
                    <img 
                        className="card-img-top" 
                        src={this.props.product.imgUrl}
                        alt="Product"
                    ></img>
                </div>
                
                <div className="card-block">
                    <h4 className="card-title">{this.props.product.title}</h4>
                    <p className="card-text">Price: ${this.props.product.price}</p>
                    <button 
                        onClick={() => this.onButtonClicked()} 
                        className={btnClass}
                    >{this.state.onWishList ? "Remove from Wishlist" : "Add to Wishlist"}
                    </button>
                </div>
            </div>
        );
        
    }
}

export default Product;