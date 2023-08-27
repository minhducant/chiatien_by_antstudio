import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef<any>();

export function goBack() {
  navigationRef.current.goBack();
}

export function replace(name: any, params = {}) {
  navigationRef.current.dispatch(StackActions.replace(name, params));
}
export function popToTop() {
  navigationRef.current.dispatch(StackActions.popToTop());
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute();
}

export const navigation = navigationRef.current;
