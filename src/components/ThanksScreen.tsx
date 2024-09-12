import { useKeydown } from "../hooks";
export function ThanksScreen({ onClose }: any) {
  useKeydown("Escape", onClose);

  return (
    <section data-testid="thanks-screen">
      <header>Thanks for your feedback.</header>
      <button data-testid="close-button" title="close" onClick={onClose}>
        close
      </button>
    </section>
  );
}
