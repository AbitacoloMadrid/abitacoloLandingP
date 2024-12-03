import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      customPages: [
        "https://www.abitacolo.info/team/Juliette%20C.%20Mallen",
        "https://www.abitacolo.info/team/Guillermo%20Perales",
        "https://www.abitacolo.info/team/Manuel%20Ben",
        "https://www.abitacolo.info/team/Alba%20Caldito%20G.",
        "https://www.abitacolo.info/team/Maria%20Para%20R.",
        "https://www.abitacolo.info/team/Cristina%20Allen%20Casal",
        "https://www.abitacolo.info/team/Xavier%20Longo",
        "https://www.abitacolo.info/team/Guillermo%20Correa",
      ],
    }),
  ],
  output: "static",
  site: "https://www.abitacolo.info/",
  adapter: vercel(),
});
