import { Switch, Route} from "react-router-dom"
import { StatisticPage } from "./pages/StatisticPage/StatisticPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { SettingsPage } from "./pages/SettingsPage/SettingsPage"
import { StartPage } from "./pages/StartPage/StartPage"


export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <StartPage />
      </Route>
      <Route path="/main" exact>
        <MainPage />
      </Route>
      <Route path="/settings" exact>
        <SettingsPage />
      </Route>
      <Route path="/statistic" exact>
        <StatisticPage />
      </Route>
    </Switch>
  )  
} 