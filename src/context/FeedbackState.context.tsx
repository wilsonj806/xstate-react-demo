import { createContext, useContext } from "react";
import { useMachine } from "@xstate/react";
import { machine } from "../state/machine";

const Context = createContext<any>({});

export function FeedbackStateProvider({ children }: any) {
  const [state, sendEvent] = useMachine(machine);
  return (
    <Context.Provider value={{ state, sendEvent }}>{children}</Context.Provider>
  );
}

export function useFeedbackState() {
  return useContext(Context);
}
