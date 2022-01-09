import React, {Component} from 'react';
import './Menu.module.scss';
import MenuItem from '../MenuItem/MenuItem';

class Menu extends Component {

    state = {
        showHiddenMenu : false
    }


    navButtonClicked = () => {
        const showHiddenMenu = !this.state.showHiddenMenu;
        this.setState({showHiddenMenu: showHiddenMenu});
        
        this.collapseClassModification(showHiddenMenu);
    }

    collapseClassModification = (showHiddenMenu) => {
        const menuItems = document.querySelector('#navbarItems');
        if(showHiddenMenu) {
            //usuń collapse
            menuItems.classList.remove("collapse");
        } else {
            //dodaj klasę collapse
            menuItems.classList.add("collapse");
        }
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">KDN</a>
                <button className="navbar-toggler" type="button" onClick={this.navButtonClicked}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarItems">
                    <div className='navbar-nav'>
                    <MenuItem link="#" value="O NAS"/>
                    <MenuItem link="#" value="WOLONTARIAT"/>
                    </div>
                </div>
            </nav>
            

        );
    }
}

export default Menu;