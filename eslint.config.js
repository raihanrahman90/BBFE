import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {
    languageOptions: { 
      globals: globals.browser
    },
    rules: {
      "react/prop-types":"off",
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  
];