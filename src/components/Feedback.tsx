import { useReducer } from "react";
import { feedbackReducer } from "../state";
import { QuestionScreen } from "./QuestionScreen";
import { FormScreen } from "./FormScreen";
import { ThanksScreen } from "./ThanksScreen";
// import { sendFeedback } from "./sendFeedback";

export function Feedback(): JSX.Element | null {
  const [state, send] = useReducer(feedbackReducer, "question");

  const handleSubmit = (value: any) => {
    // try {
    //   await sendFeedback(value);
    send({ type: "SUBMIT", value });
    // } catch (e) {
    //   console.error(e);
    // }
  };
  switch (state) {
    case "question":
      return (
        <QuestionScreen
          onClickGood={() => send({ type: "GOOD" })}
          onClickBad={() => send({ type: "BAD" })}
          onClose={() => send({ type: "CLOSE" })}
        />
      );
    case "form":
      return (
        <FormScreen
          onSubmit={handleSubmit}
          onClose={() => send({ type: "CLOSE" })}
        />
      );
    case "thanks":
      return <ThanksScreen onClose={() => send({ type: "CLOSE" })} />;
    case "closed":
      return null;
    default:
      return null;
  }
}
