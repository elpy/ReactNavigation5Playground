import { NavigationContainerRef } from '@react-navigation/native';
import { NavigationState } from '@react-navigation/routers';
import { StackActions } from '@react-navigation/native';

export class NavigationService {
  private _navigationRef: React.RefObject<NavigationContainerRef>;

  constructor(navigationRef: React.RefObject<NavigationContainerRef>) {
    this._navigationRef = navigationRef;

    this._navigationRef.current?.addListener('state', this._callback);
  }

  public replace = (to: string) => {
    if (!this._navigationRef.current) {
      return;
    }

    this._navigationRef.current.dispatch(StackActions.replace(to));
  };

  public navigate = (to: string, params?: any) => {
    if (!this._navigationRef.current) {
      return;
    }

    this._navigationRef.current.navigate(to, params);
  };

  public back = () => {
    if (!this._navigationRef.current) {
      return;
    }

    this._navigationRef.current.goBack();
  };

  public stateDidChange = (state: NavigationState | undefined) => {
    if (!state) {
      return;
    }

    const currentRoute = state.routes[state.index];
    console.log('stateDidChange', `current screen is ${currentRoute.name}`);
  };

  private _callback = () => {
    console.log(`another state change listening callback(${2})`);
  };
}
