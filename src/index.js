import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./Components/App";
import NoPage from "./Components/NoPage";
import RatingSubmitted from "./Components/Rating"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoPage />,
  },
  {
    path: "ratingsubmitted",
    element: <RatingSubmitted />,
  },
]);
/*
export default function Index() {
  return (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="/ratingsubmitted" element={<RatingSubmitted />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
