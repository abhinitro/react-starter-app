import { createContext, useEffect, useRef, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./component";
import { routes } from "./routes/frontend";
import ThemeHoc from "./component/Hoc/ThemeHoc";
import UserContext from "./context/UserContext";

const App = (props) => {
  const [name, setName] = useState("Abhilash");
  const button = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      button.current.click();
    }, 2000);
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ name: name }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout {...props} />}>
              {routes.map((item) => {
                return (
                  <Route
                    path={item.path}
                    element={
                      <item.element
                        {...props}
                        auth={true}
                        color={props.color}
                        ref={button}
                      />
                    }
                    key={item.id}
                  ></Route>
                );
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default ThemeHoc(App);
