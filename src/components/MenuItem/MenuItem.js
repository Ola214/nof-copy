import React, {Component} from 'react';
import './MenuItem.module.scss';

class MenuItem extends Component {

    render() {

        return (
            <li>
                <a href={this.props.link}>{this.props.value}</a>
            </li>
        );
    }
}

export default MenuItem;