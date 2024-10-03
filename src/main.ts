// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomLightTheme = {
  dark: false,
  colors: {
    mybrown: "#8B4513",
    white: "#FEF9F3",
  },
  variables: {
    "border-color": "#000000",
    "border-opacity": 0.12,
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});

// const vuetify = createVuetify({
//   components,
//   directives,
//   theme: {
//     defaultTheme: "myCustomLightTheme",
//     themes: {
//       myCustomLightTheme: {
//         dark: false,
//         colors: {
//           background: "#8B4513", // Example global background color
//         },
//       },
//     },
//   },
// });

createApp(App).use(vuetify).mount("#app");
