import React, {Component} from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
    render() {
        return(
            <li className="list-group-item pc-condensed">
                <button className="btn btn-outline-danger">X</button>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
        
    }
}

export default ProductCondensed;