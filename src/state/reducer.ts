export function feedbackReducer(state: string, event: any) {
  switch (state) {
    case "question":
      switch (event.type) {
        case "GOOD":
          return "thanks";
        case "BAD":
          return "form";
        case "CLOSE":
          return "closed";
        default:
          return state;
      }
    case "form":
      switch (event.type) {
        case "SUBMIT":
          return "thanks";
        case "CLOSE":
          return "closed";
        default:
          return state;
      }
    case "thanks":
      switch (event.type) {
        case "CLOSE":
          return "closed";
        default:
          return state;
      }
    default:
      return state;
  }
}
