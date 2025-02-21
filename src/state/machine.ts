import { setup } from "xstate";
import { StateNames, feedbackStates } from "./machineStates";

// state machine https://stately.ai/registry/editor/6b33a46d-1ec2-4797-a108-7f0ba9d1f053?machineId=104c4dd3-d407-48ea-b3fc-33d478ba426a&mode=Design

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
          target: "Feedback",
        },
      },
    },
    Success: {},
    Feedback: {
      on: {
        SUBMIT_FEEDBACK: {
          target: "Success",
        },
      },
    },
  },
});
