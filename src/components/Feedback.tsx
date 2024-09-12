import { useEffect } from "react";
import { QuestionScreen } from "./QuestionScreen";
import { FormScreen } from "./FormScreen";
import { ThanksScreen } from "./ThanksScreen";
import { StateNames, TransitionNames } from "../state/machineStates";
import { useFeedbackState } from "../context";

export function Feedback(): JSX.Element | null {
  const { state, sendEvent } = useFeedbackState();
  useEffect(() => {
    console.log("yep", state);
  }, [state]);
  const handleSubmit = (value: any) => {
    // try {
    //   await sendFeedback(value);
    sendEvent({ type: TransitionNames.submitFeedback, value });
    // } catch (e) {
    //   console.error(e);
    // }
  };
  switch (state.value) {
    case StateNames.initial:
      return (
        <QuestionScreen
          onClickGood={() => sendEvent({ type: TransitionNames.good })}
          onClickBad={() => sendEvent({ type: TransitionNames.bad })}
          onClose={() => sendEvent({ type: "CLOSE" })}
        />
      );
    case StateNames.feedback:
      return (
        <FormScreen
          onSubmit={handleSubmit}
          onClose={() => sendEvent({ type: "CLOSE" })}
        />
      );
    case StateNames.success:
      return <ThanksScreen onClose={() => sendEvent({ type: "CLOSE" })} />;
    case "closed":
      return null;
    default:
      return null;
  }
}
