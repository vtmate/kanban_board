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
    white: "#FEF9F3",
    yellow: "#FEECBE",
    pink: "#F2B8B4",
    brown: "#3C1414",
  },
  //   variables: {
  //     "border-color": "#000000",
  //     "border-opacity": 0.12,
  //   },
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
