import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';

const menus = [
    {
        name : 'Trang chủ',
        path : '/',
        exact : true
    },
    {
        name : 'Quản lí sản phẩm',
        path : '/product-list',
        exact : false
    }
]
const MyLink = ({label,to,activeOnlyWhenExact})=>{
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active = match ? "active" : '';
                return (
                    <li className={active}>
                        <Link to={to}  >
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
};
class Menu extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <a className="navbar-brand">API</a>
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </div>
        );
    }
    showMenus = (menus) => {
        let result = null;
        if(menus.length>0)
        {
            result = menus.map((menu,index) => {
                return (
                        <MyLink key={index} label={menu.name} to={menu.path} activeOnlyWhenExact={menu.exact}></MyLink>
                    )
            })
        }
        return result;
    }
}
export default Menu;