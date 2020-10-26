import { EventListenerCallback } from '@react-navigation/core/src/types';
import {
  NavigationContainerRef,
  NavigationContainerEventMap,
  PartialState,
} from '@react-navigation/native';
import { NavigationState } from '@react-navigation/routers';
import { StackActions } from '@react-navigation/native';
import { action, makeObservable, observable } from 'mobx';

export class NavigationService {
  @observable.ref public activeRoutes: string[] = [];
  private _navigationRef: React.RefObject<NavigationContainerRef>;

  constructor(navigationRef: React.RefObject<NavigationContainerRef>) {
    this._navigationRef = navigationRef;
    makeObservable(this);
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

  // Первый вариант получения изменений роутинга
  @action
  public stateDidChange = (state: NavigationState | undefined) => {
    if (!state || state.index === undefined) {
      return;
    }

    const currentRoutes = this.extractActiveRoutes(state);
    this.activeRoutes = currentRoutes;

    console.log(
      'stateDidChange event 1: ',
      `current screen is ${currentRoutes}`,
    );
  };

  // Второй вариант получения изменений роутинга
  public subscribeForStateUpdates = () => {
    if (!this._navigationRef.current) {
      return;
    }

    this._navigationRef.current!.addListener('state', this._callback);
  };

  @action
  private _callback: EventListenerCallback<
    NavigationContainerEventMap,
    'state'
  > = (event) => {
    const { state } = event.data;

    if (!state || state.index === undefined) {
      return;
    }

    const currentRoutes = this.extractActiveRoutes(state);
    this.activeRoutes = currentRoutes;

    console.log(
      'stateDidChange event 2: ',
      `current screen is ${currentRoutes}`,
    );
  };

  private extractActiveRoutes = (
    state: NavigationState | PartialState<NavigationState>,
  ): string[] => {
    if (!state || state.index === undefined) {
      return [];
    }

    const { routes, index } = state;

    if (routes[index].state) {
      const subState = routes[index].state!;
      return [routes[index].name, ...this.extractActiveRoutes(subState)];
    } else {
      return [routes[index].name];
    }
  };
}
