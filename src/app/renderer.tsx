import { Metadata } from '@grpc/grpc-js';
import { OpenDialogOptions } from 'electron';
import React from 'react';
import * as ReactDOM from 'react-dom/client';

import { ServiceInfo } from '../core';
import App from './App';

declare global {
  interface Window {
    electron: {
      store: {
        getItem: (key: string) => any;
        setItem: (key: string, value: any) => void;
        removeItem: (key: string) => void;
      };
      dialog: {
        open: (options: OpenDialogOptions) => Promise<string[]>;
      };
      protobuf: {
        loadFromFile: (path: string, includeDirs?: string[]) => Promise<ServiceInfo[]>;
      };
      grpcClient: {
        sendUnaryRequest: (
          path: string,
          includeDirs: string[],
          serviceName: string,
          methodName: string,
          address: string,
          payload: Record<string, unknown>,
          metadata?: Metadata
        ) => Promise<Record<string, unknown>>;
      };
    };
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
