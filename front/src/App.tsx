import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import AirconPage from "./components/AirconPage";

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
      <Router>
        <Routes>
          <Route path="/" element={<AirconPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
