export type Listener<VALUE_TYPE> = (value: VALUE_TYPE) => void;

export interface Signal<SIGNAL_TYPE> {
  dispatch(value: SIGNAL_TYPE): void;

  removeListener(listener: Listener<SIGNAL_TYPE>): void;

  addListener(listener: Listener<SIGNAL_TYPE>): void;
}

export function signal<SIGNAL_TYPE>(): Signal<SIGNAL_TYPE> {
  let listeners: Listener<SIGNAL_TYPE>[] = [];
  return {
    dispatch(value: SIGNAL_TYPE) {
      [...listeners].forEach((listener) => listener(value));
    },
    removeListener(listener: Listener<SIGNAL_TYPE>) {
      listeners = listeners.filter((l) => listener != l);
    },
    addListener(listener: Listener<SIGNAL_TYPE>) {
      listeners.push(listener);
    },
  };
}
