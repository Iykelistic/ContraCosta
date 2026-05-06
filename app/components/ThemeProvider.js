"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

function applyThemeClass(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light");

  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = stored === "dark" || (stored !== "light" && prefersDark);
      applyThemeClass(isDark);
      setThemeState(isDark ? "dark" : "light");
    } catch {
      applyThemeClass(false);
      setThemeState("light");
    }
  }, []);

  const setTheme = useCallback((next) => {
    const t = next === "dark" ? "dark" : "light";
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
    } catch {
      /* private mode / blocked storage */
    }
    applyThemeClass(t === "dark");
  }, []);

  const toggle = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
      applyThemeClass(next === "dark");
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggle }),
    [theme, setTheme, toggle]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
