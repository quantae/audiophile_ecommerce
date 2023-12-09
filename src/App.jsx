import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles/font_colors.css";
import "./styles/global.css";
import ProductCategoryPage from "./pages/product_category/ProductCategoryPage";
import ProductDetailPage from "./pages/product_detail/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories/:category",
    element: <ProductCategoryPage />,
  },
  {
    path: "/product/:productSlug",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </div>
  );
}

export default App;
