import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/sign-in/sing-in.component";

const App = () => {
  return (
    // <Home />
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path="shop" element ={<Shop />}></Route> */}
        <Route path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
