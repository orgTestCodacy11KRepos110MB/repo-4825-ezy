import { IpcRendererEvent } from 'electron';
import { RpcError } from 'grpc-web';

export type OnDataCallback = (data: Record<string, unknown>) => void;

export type OnErrorCallback = (error: RpcError) => void;

export type OnEndCallback = () => void;

export function wrapHandler(streamId: string, callback: (...callbackArgs: any[]) => void) {
  return function wrappedHandler(event: IpcRendererEvent, id: string, ...args: any[]) {
    if (streamId === id) {
      callback(...args);
    }
  };
}
