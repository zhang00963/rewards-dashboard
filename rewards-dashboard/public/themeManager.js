// Applies a theme (imported from ./themes/index.js) to the page by setting
// CSS custom properties on the root element.
const TOKEN_TO_CSS_VAR = {
  canvas: "--canvas",
  surface: "--surface",
  surfaceAlt: "--surface-alt",
  hover: "--hover",
  text: "--text",
  textMuted: "--text-muted",
  textInverse: "--text-inverse",
  border: "--border",
  borderStrong: "--border-strong",
  accent: "--accent",
  accentHover: "--accent-hover",
  accentSubtle: "--accent-subtle",
  focus: "--focus",
  positive: "--positive",
  negative: "--negative",
  energyLowBg: "--energy-low-bg",
  energyLowAccent: "--energy-low-accent",
  energyLowText: "--energy-low-text",
  energyMediumBg: "--energy-medium-bg",
  energyMediumAccent: "--energy-medium-accent",
  energyMediumText: "--energy-medium-text",
  energyHighAccent: "--energy-high-accent",
  energyHighBg: "--energy-high-bg",
  energyHighText: "--energy-high-text",
};

export function applyTheme(theme, mode) {
  const root = document.documentElement;
  const palette = theme.palettes[mode];
  if (!palette) return;

  root.setAttribute("data-theme-mode", mode);
  root.setAttribute("data-theme-id", theme.id);

  for (const [token, cssVar] of Object.entries(TOKEN_TO_CSS_VAR)) {
    const value = palette[token];
    if (value) root.style.setProperty(cssVar, value);
  }

  document.querySelectorAll('meta[name="theme-color"]').forEach((el) => {
    el.content = palette.canvas;
  });
}

const STORAGE_KEY_THEME = "rewards-dashboard:theme-id";
const STORAGE_KEY_MODE = "rewards-dashboard:mode";

export function getStoredThemeId() {
  try {
    return localStorage.getItem(STORAGE_KEY_THEME);
  } catch {
    return null;
  }
}

export function setStoredThemeId(id) {
  try {
    localStorage.setItem(STORAGE_KEY_THEME, id);
  } catch {
    /* storage unavailable (private browsing etc.) - theme just won't persist */
  }
}

export function getStoredMode() {
  try {
    return localStorage.getItem(STORAGE_KEY_MODE);
  } catch {
    return null;
  }
}

export function setStoredMode(mode) {
  try {
    localStorage.setItem(STORAGE_KEY_MODE, mode);
  } catch {
    /* storage unavailable - mode just won't persist */
  }
}

export function systemPrefersDark() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}
