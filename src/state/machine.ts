import { setup } from "xstate";
import { StateNames, feedbackStates } from "./machineStates";
export const machine = setup({
  types: {
    context: {} as {},
    events: {} as
      | { type: "GOOD" }
      | { type: "BAD" }
      | { type: "SUBMIT_FEEDBACK" },
  },
}).createMachine({
  context: {},
  id: "Simple Feedback",
  initial: StateNames.initial,
  states: feedbackStates,
});
