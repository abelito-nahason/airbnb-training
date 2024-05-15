import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootComponent from './components/RootComponent';
import HomepagePage from './pages/homepage/homepage';
import SearchPage from './pages/search/search';
import ErrorPage from './pages/error/errorpage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <HomepagePage/>
        },
        {
          path: "search",
          element: <SearchPage/>
        }
      ]   
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
