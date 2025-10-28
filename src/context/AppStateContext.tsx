import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { AppState, AppStateStatus } from 'react-native';

interface AppStateContextType {
  isOnline: boolean;
  appState: AppStateStatus;
  isAppActive: boolean;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

interface AppStateProviderProps {
  children: ReactNode;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);
  const [appState, setAppState] = useState<AppStateStatus>('active');
  const [isAppActive, setIsAppActive] = useState(true);

  useEffect(() => {
    // Network state listener
    const unsubscribeNetInfo = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected ?? false);
    });

    // App state listener
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      setAppState(nextAppState);
      setIsAppActive(nextAppState === 'active');
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      unsubscribeNetInfo();
      subscription?.remove();
    };
  }, []);

  const value: AppStateContextType = {
    isOnline,
    appState,
    isAppActive,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = (): AppStateContextType => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
