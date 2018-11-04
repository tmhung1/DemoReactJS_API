import React  from 'react';
import HomePage from './Pages/HomePage/HomePage';
import Notfound from './Pages/Notfound/Notfound';
import ProductListPage from './Pages/ProductList/ProductListPage';
import ProductActionPage from './Pages/ProductAction/ProductActionPage';
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage/>
    },
    {
        path : '/product-list',
        exact : false,
        main : () => <ProductListPage/>
    },
    {
        path : '/product/add',
        exact : false,
        main : ({history}) => <ProductActionPage history={history}/>
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({match,history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path : '',
        exact : false,
        main : () => <Notfound/>
    },
   
]
export default routes;