import { useTheme } from "next-themes";

const useGetMode = () => {
  const { theme, systemTheme } = useTheme();
  return theme === "system" ? systemTheme : theme;
};

export { useGetMode };
