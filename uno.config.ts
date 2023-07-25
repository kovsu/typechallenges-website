import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${parseInt(d) / 4}rem` })],
  ],
  shortcuts: {
    btn: "rounded-lg px-4 py-2 bg-btn hover:bg-btnHover .dark:bg-btnDark .dark:hover:bg-btnDarkHover duration-100 ",
    done: "bg-red-500! text-white!",
  },
  theme: {
    colors: {
      type: "#294F80",
      challenge: "#4265AF",
      btn: "#eff0f3",
      btnDark: "#3A3A3A",
      btnHover: "#e8eaf0",
      btnDarkHover: "#4A4A4A",
    },
    breakpoints: {
    },
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Source Sans Pro",
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
  ],
});
