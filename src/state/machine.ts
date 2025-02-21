import { setup } from "xstate";
import { StateNames, feedbackStates } from "./machineStates";

export const machine = setup({
  types: {
    context: {} as {},
    events: {} as
      | { type: "BAD" }
      | { type: "GOOD" }
      | { type: "SUBMIT_FEEDBACK" },
  },
}).createMachine({
  context: {},
  id: "Simple Feedback",
  initial: "Initial",
  states: {
    Initial: {
      on: {
        GOOD: {
          target: "Success",
        },
        BAD: {
          target: "Feeback",
        },
      },
    },
    Success: {},
    Feeback: {
      on: {
        SUBMIT_FEEDBACK: {
          target: "Success",
        },
      },
    },
  },
});
