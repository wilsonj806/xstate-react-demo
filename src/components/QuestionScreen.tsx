import { useKeydown } from "../hooks";
export function QuestionScreen({ onClickGood, onClickBad, onClose }: any) {
  useKeydown("Escape", onClose);
  return (
    <div>
      <h1>How was your session</h1>
      <button onClick={onClickGood}>Good</button>
      <button onClick={onClickBad}>Bad</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
