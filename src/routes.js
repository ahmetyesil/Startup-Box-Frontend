import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import SignUpPage from "./pages/Signup";
import LoginPage from "./pages/Login";

export default [
    {
        path: "/",
        component: HomePage,
        exact: true,
    },
    {
        path: "/products",
        component: ProductsPage,
        exact: true,
    },
    {
        path: "/signup",
        component: SignUpPage,
        exact: true,
    },
    {
        path: "/login",
        component: LoginPage,
        exact: true,
    },
];
