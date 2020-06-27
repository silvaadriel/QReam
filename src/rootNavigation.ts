import { createRef } from 'react';
import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any): void {
  navigationRef.current?.navigate(name, params);
}

export function goBack(): void {
  navigationRef.current?.goBack();
}

export function popToTop(
  routeName: string,
  params?: any,
  firstScreen?: string,
): void {
  const routes = params ? [{ name: routeName, params }] : [{ name: routeName }];

  if (firstScreen) {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: firstScreen }, ...routes],
      }),
    );
  } else {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 1,
        routes,
      }),
    );
  }
}
