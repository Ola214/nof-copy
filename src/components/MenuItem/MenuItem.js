import React, {Component} from 'react';
import './MenuItem.module.scss';

class MenuItem extends Component {

    render() {

        return (
            <a className='nav-item nav-link' href={this.props.link}>{this.props.value}</a>
        );
    }
}

export default MenuItem;