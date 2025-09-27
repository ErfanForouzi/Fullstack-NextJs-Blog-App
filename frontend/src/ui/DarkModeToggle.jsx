import { SunIcon,MoonIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {

  const {toggleDarkMode,isDarkMode} = useDarkMode()
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <SunIcon className="w-5 h-5 text-yellow-400" />
      ):(
         <MoonIcon className="w-5 h-5 text-secondary-500" />
      )}
    </button>
  );
}
export default DarkModeToggle;
