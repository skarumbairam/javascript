import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import PageNotFound from "./components/PageNotFound";
import store from "./app/store";

const AppLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <Outlet />
      </Provider>
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
