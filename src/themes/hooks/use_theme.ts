import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/src/store/store";
import { Themes } from "../redux/types";

const useTheme = () => {
  const dispatch = useAppDispatch();

  const { theme } = useSelector((state: RootState) => state.theme);

  const toggleTheme = () => {
    dispatch(toggleTheme);
  };

  return {
    theme,
    toggleTheme,
    isDarkMode: theme === Themes.DARK,
  };
};

export default useTheme;
