const { useState, useEffect } = require("react");

export const THEMES = [
  "light",
  "dark",
  "synthwave",
  "halloween",
  "forest",
  "luxury",
  "lemonade",
  "night",
];
let localTheme;
const useTheme = () => {
  if (typeof window !== "undefined") {
    localTheme = localStorage.getItem("theme");
  }
  const [theme, setTheme] = useState(localTheme || "default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export default useTheme;
