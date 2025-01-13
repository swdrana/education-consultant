import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(null); // শুরুতে null রাখুন

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme); // ক্লায়েন্ট সাইডে থিম সেট করুন
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    if (!theme) return; // থিম লোড না হলে কিছু করবেন না
    const newTheme =
    //   theme === "light" ? "dark" : theme === "dark" ? "mytheme" : "light";
      theme === "light" ? "dark" : theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return { theme, toggleTheme };
};
