module.exports = {
  presets: ["babel-preset-expo"],
  env: {
    test: {
      plugins: ["react-native-reanimated/plugin"],
    },
  },
};
