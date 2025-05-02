import "@testing-library/jest-native/extend-expect";

// Mock the expo-status-bar module
jest.mock("expo-status-bar", () => ({
  StatusBar: () => null,
}));

// Mock the @expo/vector-icons module
jest.mock("@expo/vector-icons", () => ({
  Ionicons: () => null,
}));

// Mock the react-native-reanimated module
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// Setup for React Navigation testing
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
});
