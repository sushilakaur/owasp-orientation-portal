import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CompleteRegistration from "./Pages/CompleteRegistration";
// import ContactUs from "./Pages/ContactUs";
import FunQuiz from "./Pages/FunQuiz";
import CodingQuiz from "./Pages/CodingQuiz";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/error" component={ErrorPage} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/contactus" component={ContactUs} /> */}
          <Route
            exact
            render={(props) => {
              let time = localStorage.getItem("session#hash%20t");
              if (!time) {
                localStorage.setItem(
                  "session#hash%20t",
                  String.fromCharCode(0)
                );
                time = String.fromCharCode(0);
              }
              const decodedTime = time.charCodeAt(0);
              if (PerformanceNavigation.TYPE_RELOAD === 1)
                localStorage.setItem(
                  "session#hash%20t",
                  String.fromCharCode(decodedTime + 1)
                );
              return <FunQuiz {...props} />;
            }}
            path="/funquiz"
          />
          <Route exact path="/codingquiz" component={CodingQuiz} />
          <Route exact path="/" component={CompleteRegistration} />

          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
