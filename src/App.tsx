import { Route, Routes } from "react-router";
import { Slide, ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/not-found/views";
import MainLayout from "./layout/main";
import { HOME_ROUTES } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          {HOME_ROUTES}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
