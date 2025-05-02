# Integration Tests for Step 1: Core Setup & Navigation Foundation

**Testing Framework:** Jest + React Native Testing Library (`@testing-library/react-native`)

**Target Component:** The root `App.js` component (or the main `AppNavigator` wrapped in necessary providers like `NavigationContainer` and `PaperProvider`).

**Assumptions:**

- Placeholder screens (`HomeScreen`, `UpcomingScreen`, `CompletedScreen`) exist and render unique text (e.g., "Home Screen", "Upcoming Screen", "Completed Screen") for identification.
- The `BottomTabNavigator` is configured with routes named 'Home', 'Upcoming', and 'Completed', and labels matching these names.

---

## Test Suite: App Navigation Foundation

**Test Case 1: App Renders Correctly**

- **Goal:** Ensure the main application component mounts without throwing errors.
- **Action:** Render the `App` component.
- **Assertion:** Expect no errors during rendering.

**Test Case 2: Bottom Tabs are Visible**

- **Goal:** Verify the tab bar UI is present.
- **Action:** Render the `App` component.
- **Assertion:** Expect to find elements corresponding to the tab labels "Home", "Upcoming", and "Completed" using `screen.getByText()`.

**Test Case 3: Home Tab is Active by Default**

- **Goal:** Ensure the initial view is the Home screen.
- **Action:** Render the `App` component.
- **Assertion:**
  - Expect the placeholder text "Home Screen" to be visible using `screen.getByText('Home Screen')`.
  - Expect the placeholder texts "Upcoming Screen" and "Completed Screen" _not_ to be visible initially.
  - (Optional) Check if the "Home" tab element has accessibility traits indicating it's selected.

**Test Case 4: Navigate to Upcoming Tab**

- **Goal:** Verify navigation to the Upcoming screen works.
- **Action:**
  1.  Render the `App` component.
  2.  Find the "Upcoming" tab element (e.g., `screen.getByText('Upcoming')`).
  3.  Simulate a press event on it using `fireEvent.press()`.
- **Assertion:**
  - Expect the placeholder text "Upcoming Screen" to be visible using `screen.getByText('Upcoming Screen')`.
  - Expect the placeholder text "Home Screen" _not_ to be visible after navigation.

**Test Case 5: Navigate to Completed Tab**

- **Goal:** Verify navigation to the Completed screen works.
- **Action:**
  1.  Render the `App` component.
  2.  Find the "Completed" tab element (e.g., `screen.getByText('Completed')`).
  3.  Simulate a press event on it using `fireEvent.press()`.
- **Assertion:**
  - Expect the placeholder text "Completed Screen" to be visible using `screen.getByText('Completed Screen')`.
  - Expect the placeholder text "Home Screen" _not_ to be visible after navigation.

**Test Case 6: (Optional) Tab Icons are Present**

- **Goal:** Verify icons are rendered alongside labels (requires specific setup/querying).
- **Action:** Render the `App` component.
- **Assertion:** Use appropriate queries (e.g., `getByTestId` if you assign test IDs to icons) to check for the presence of icon components associated with each tab. _Note: This might require mocking icon libraries._

---

**Setup Notes:**

- Ensure tests are run within the context of `NavigationContainer` and `PaperProvider`. You might need a helper function to wrap the component under test with these providers.
- Install testing libraries: `npm install --save-dev @testing-library/react-native jest` or `yarn add --dev @testing-library/react-native jest`. Follow Expo/React Native specific setup guides for Jest if needed.
