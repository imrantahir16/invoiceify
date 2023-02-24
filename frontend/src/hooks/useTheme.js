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
