import "./App.css";

import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div className="bottom-items">
        <div className="bottom">
          <div className="play-icon-border">
            <div className="play-icon">
              <PlayCircleIcon className="sx" />
            </div>
          </div>
          <div className="play-text">
            <p>
              A lion's roar can be heard from as far as 5 miles away. A lion can
              run for short distances at 
            </p>
            <span>
             50 mph and leap as far as 36 feet . Know more ...
              <span className="play-text-c"> Watch the video Now</span>{" "}
            </span>
          </div>
          {/* <div className="explore">
            {" "}
            <p className="explore-left">Explore -&gt; </p>{" "}
            <div className="explore-right"></div>
          </div> */}
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
}

export default App;
