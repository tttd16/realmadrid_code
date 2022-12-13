import { HeaderFooterOnly, DefaultLayout } from '~/components/Layout';
import HomePage from '~/pages/HomePage';
import TicketsPage from '~/pages/TicketsPage';
import VipPage from '~/pages/VipPage';
import StorePage from '~/pages/StorePage/StorePage';
import New1 from '~/pages/HomePage/Section/NewsPage/New1';
import New2 from '~/pages/HomePage/Section/NewsPage/New2';
import New3 from '~/pages/HomePage/Section/NewsPage/New3';
import New4 from '~/pages/HomePage/Section/NewsPage/New4';
import Checkout from '~/pages/StorePage/Checkout';
import CreateContainer from '~/pages/StorePage/CreateContainer';

const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/tickets', component: TicketsPage, layout: HeaderFooterOnly },
  { path: '/vip', component: VipPage, layout: HeaderFooterOnly },
  { path: '/store', component: StorePage, layout: null },
  { path: '/Checkout', component: Checkout, layout: null },
  { path: '/createItem', component: CreateContainer, layout: null },
  { path: '/blog/new1', component: New1, layout: HeaderFooterOnly },
  { path: '/blog/new2', component: New2, layout: HeaderFooterOnly },
  { path: '/blog/new3', component: New3, layout: HeaderFooterOnly },
  { path: '/blog/new4', component: New4, layout: HeaderFooterOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
