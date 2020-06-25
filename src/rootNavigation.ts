import { createRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any): void {
  navigationRef.current?.navigate(name, params);
}

export function goBack(): void {
  navigationRef.current?.goBack();
}
