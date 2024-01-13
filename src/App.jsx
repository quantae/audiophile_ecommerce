import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles/font_colors_typography.css";
import "./styles/global.css";
import ProductCategoryPage from "./pages/product_detail/ProductDetailPage";
import ProductDetailPage from "./pages/product_detail/ProductDetailPage";


import TestButton from "./feature/TestButton/TestButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <TestButton/>
      </>
    ),
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
