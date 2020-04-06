import store from "../ducks";
import history from "../router/history";
import { Creators as NavigationCreators } from "../ducks/navigation";

const push = routeName => {
  store.dispatch(NavigationCreators.setPathName(routeName));
  history.push(routeName);
};

const NavigationService = { push };

export default NavigationService;
