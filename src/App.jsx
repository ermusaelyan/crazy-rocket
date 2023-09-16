import './App.scss';
import {Switch, Route, HashRouter,} from "react-router-dom";
import {Desktop} from "./pages/Desktop/Desktop";
import {Mobile} from "./pages/Mobile/Mobile";
import {useMediaQuery} from 'react-responsive'
import {StartDesktop} from "./pages/StartDesktop/StartDesktop";
import {StartMobile} from "./pages/StartMobile/StartMobile";

function App() {
  const isBigScreen = useMediaQuery({query: '(min-width: 1150px)'})
  if (isBigScreen) {
    document.documentElement.classList.add('desktop')
    document.documentElement.classList.remove('mobile')
  } else {
    document.documentElement.classList.remove('desktop')
    document.documentElement.classList.add('mobile')
  }
  console.log(isBigScreen);
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          {isBigScreen ? <StartDesktop/> : <StartMobile/>}
        </Route>
        <Route path="/game">
          {isBigScreen ? <Desktop/> : <Mobile/>}
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
