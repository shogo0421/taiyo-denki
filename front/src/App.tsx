import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import AirconPage from "./components/AirconPage";
import TopHeader from "./components/TopHeader";
import TopFooter from "./components/TopFooter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <TopHeader />
      <Router>
        <Routes>
          <Route path="/" element={<AirconPage />} />
        </Routes>
      </Router>
      <TopFooter />
    </div>
  );
}

export default App;
