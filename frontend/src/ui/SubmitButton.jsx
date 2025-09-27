import Button from "./Button";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function SubmitButton({ children, calssName, ...rest }) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      {...rest}
      className={`flex items-center justify-center gap-x-4 py-3 text-base w-full
        ${calssName}
        `}
    >
      {children}
      {pending && <SpinnerMini />}
    </Button>
  );
}
export default SubmitButton;
