// dependncy imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component imports
import Home from "./pages/home/Home";
import "./styles/font_colors_typography.css";
import "./styles/global.css";
import ProductCategoryPage from "./pages/product_category/ProductCategoryPage";
import ProductDetailPage from "./pages/product_detail/ProductDetailPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "categories/:category",
    element: <ProductCategoryPage />,
  },
  {
    path: "/product/:productSlug",

    element: <ProductDetailPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
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
