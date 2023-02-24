import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Summary from "./Components/Summary";
import UserList from "./Components/UserList";
import Context from "./Components/Context";
import Form from "./Components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserList />} />
        <Route path="/Summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
