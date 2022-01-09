import React, {Component} from 'react';
import './Menu.module.scss';
import MenuItem from '../MenuItem/MenuItem';

class Menu extends Component {


    render() {
        return(
            <nav>
                <ul>
                <MenuItem link="#" value="O NAS"/>
                <MenuItem link="#" value="WOLONTARIAT"/>
                </ul>
            </nav>
            

        );
    }
}

export default Menu;