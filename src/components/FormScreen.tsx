import { useKeydown } from "../hooks";

export function FormScreen({ onSubmit, onClose }: any) {
  useKeydown("Escape", onClose);

  return (
    <form
      data-testid="form-screen"
      onSubmit={(e: any) => {
        e.preventDefault();
        const { response } = e.target.elements;

        onSubmit({
          value: response,
        });
      }}
    >
      <header>Care to tell us why?</header>
      <textarea
        data-testid="response-input"
        name="response"
        placeholder="Complain here"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.stopPropagation();
          }
        }}
      />
      <button data-testid="submit-button">Submit</button>
      <button
        data-testid="close-button"
        title="close"
        type="button"
        onClick={onClose}
      />
    </form>
  );
}
