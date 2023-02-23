const { useState, useEffect } = require("react");

export const THEMES = [
  "light",
  "dark",
  "emerald",
  "synthwave",
  "halloween",
  "forest",
  "luxury",
  "dracula",
  "lemonade",
  "night",
];

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "default"
  );

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
