import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import About from '../pages/About';
import Contact from '../pages/Contact';
// import BlogListPage from '../pages/BlogList';
// import BlogSlugPage from '../pages/BlogSlug';
import ProductDemoPage from '../pages/demo';
import NotFound from '../pages/NotFound';
import SmartHome from '../pages/SmartHome';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <SmartHome /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      // {
      //   path: 'blogs',
      //   children: [
      //     { index: true, element: <BlogListPage /> },
      //     { path: ':slug', element: <BlogSlugPage /> },
      //   ],
      // },
      { path: 'demo', element: <ProductDemoPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });