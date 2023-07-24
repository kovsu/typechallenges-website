import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${parseInt(d) / 4}rem` })],
  ],
  shortcuts: {
  },
  theme: {
    colors: {
      type: "#294F80",
      challenge: "#4265AF",
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
