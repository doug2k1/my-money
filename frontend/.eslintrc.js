module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: ["react-app", "prettier"],
  rules: {
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
};
