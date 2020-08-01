import Home from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import CatalogDetailsPage from './pages/CatalogDetailsPage'

export default [
  { path: "/", component: Home, exact: true, name: 'home' },
  { path: "/catalog/:location/:branch", component: CatalogPage, exact: true, name: 'catalog' },
  { path: "/catalog-details/:location/:branch/:catalog", component: CatalogDetailsPage, exact: true , name: 'catalog-details'}
];
