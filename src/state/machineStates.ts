// See below link for state diagram:
// https://stately.ai/registry/editor/6b33a46d-1ec2-4797-a108-7f0ba9d1f053?machineId=104c4dd3-d407-48ea-b3fc-33d478ba426a&mode=design
export const StateNames = {
  initial: "Initial",
  success: "Success",
  feedback: "Feedback",
};
export const feedbackStates = {
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
};
