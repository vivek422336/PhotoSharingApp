# Quicam App - Final UI Build Plan

This plan outlines the steps to build the User Interface (UI) and navigation flow for the Quicam app based on the provided designs, focusing on static data first.

## Phase 1: UI Layout and Navigation (Static Data)

1.  **Step 1: Core Setup & Navigation Foundation**

    - **Goal:** Establish the basic app skeleton and main navigation tabs.
    - **Tasks:** Set up project structure (feature-first), install dependencies (`react-navigation`, `react-native-paper`, etc.), create placeholder screen components, implement `BottomTabNavigator` ("Home", "Upcoming", "Completed") within `AppNavigator`, setup `PaperProvider` theme in `App.js`.
    - **Outcome:** App runs with basic bottom tabs linking to empty screens.

2.  **Step 2: Build `HomeScreen` UI**

    - **Goal:** Implement the visual layout of the Home tab.
    - **Design:** `Screenshot 2025-04-30 at 10.19.13.jpg`
    - **Tasks:** Develop `HomeScreen.js` with header (Logo/Notifications/Avatar), "JOIN AN EVENT" / "CREATE AN EVENT" buttons, create reusable `EventCard.js`, display static list of ongoing events using `FlatList`.
    - **Outcome:** Visually complete Home screen with static data and tappable Join/Create buttons.

3.  **Step 3: Build `JoinGroupScreen` UI**

    - **Goal:** Implement the screen for users to join an event.
    - **Design:** `Screenshot 2025-04-30 at 10.51.47.jpg` (Right side)
    - **Tasks:** Create `JoinGroupScreen.js`. Implement header, code input area, QR code scanner placeholder (viewfinder area), "Join group" button. Implement navigation triggered by tapping "JOIN AN EVENT" on `HomeScreen`.
    - **Outcome:** User can navigate to a static Join Group screen.

4.  **Step 4: Build `UpcomingScreen` & `CompletedScreen` UI**

    - **Goal:** Implement layouts for the other main tabs.
    - **Design:** `Screenshot 2025-04-30 at 10.20.07.jpg` (Upcoming)
    - **Tasks:** Develop `UpcomingScreen.js` & `CompletedScreen.js`. Reuse `EventCard.js` via `FlatList`. Add specific badges/overlays ("X Days To Go", "COMPLETED") based on static data.
    - **Outcome:** Visually complete Upcoming and Completed screens with static data.

5.  **Step 5: Implement Create Event Flow**

    - **Goal:** Build the multi-screen flow for creating a new event.
    - **Designs:** `Screenshot 2025-04-30 at 10.48.15.jpg` (Main flow), `Screenshot 2025-04-30 at 10.50.08.jpg` (Date Picker)
    - **Tasks:** Define navigation (modal/stack from "CREATE AN EVENT" button). Create `CreateEventScreen.js` & `AddParticipantsScreen.js`. Build `CreateEventScreen` UI (cover photo, name, participants link, date fields, create button). Implement tappable date fields triggering a placeholder/basic date picker modal. Build `AddParticipantsScreen` UI (search, static user list with checkboxes, continue button). Handle state (`useState`) for form inputs and navigation between these screens.
    - **Outcome:** User can navigate the Create Event flow, interact with form elements (using static data/pickers), and see selections reflected.

6.  **Step 6: Event Stack Navigation & `EventGalleryScreen` UI**

    - **Goal:** Set up navigation into event details and build the main gallery view.
    - **Designs:** `Screenshot 2025-04-30 at 10.16.51.jpg` / `10.20.36.jpg`
    - **Tasks:** Create `EventStackNavigator.js`. Implement navigation from `EventCard` taps to `EventGalleryScreen` (passing static `eventId`). Build `EventGalleryScreen.js` UI (header with Invite/Settings icons, cover photo, "View subevents" link, group members avatars, filter chips, `PhotoGrid.js` component with static photos, FABs).
    - **Outcome:** User can tap an event card and navigate to a visually complete (static) Event Gallery screen.

7.  **Step 7: Build `InvitePeopleScreen` UI**

    - **Goal:** Implement the screen for sharing event access details.
    - **Design:** `Screenshot 2025-04-30 at 10.51.47.jpg` (Left side)
    - **Tasks:** Create `InvitePeopleScreen.js`. Implement header, sections displaying static Share Link, 6-digit Code, QR Code image placeholder, Tutorial placeholder. Implement navigation triggered by tapping the "Invite" icon on `EventGalleryScreen`. Add placeholder Copy buttons.
    - **Outcome:** User can navigate from the event gallery to a static Invite People screen.

8.  **Step 8: Build `SubeventListScreen` UI & Create Subevent Flow**

    - **Goal:** Implement the screen listing subevents and allow creation of new ones.
    - **Designs:** `Screenshot 2025-04-30 at 10.21.07.png` (List), `Screenshot 2025-04-30 at 10.49.39.jpg` (Create)
    - **Tasks:** Develop `SubeventListScreen.js` (header, cover photo, list using `SubeventListItem.js`, FABs). Create `CreateSubeventScreen.js` (or modal) with Name input, Date/Time toggles/pickers (basic), Create button. Implement navigation from "View subevents" link to `SubeventListScreen` and from "+ Subevent" FAB to the creation form.
    - **Outcome:** User can view a static list of subevents and open/interact with a static "Create Subevent" form.

9.  **Step 9: Build `SubeventGalleryScreen` UI**

    - **Goal:** Implement the gallery view for a specific subevent.
    - **Design:** `Screenshot 2025-04-30 at 10.21.35.jpg`
    - **Tasks:** Develop `SubeventGalleryScreen.js`. Implement header, timestamp, participants, reuse `PhotoGrid.js` with static photos, add specific FABs. Implement navigation from tapping a `SubeventListItem`.
    - **Outcome:** User can navigate to a specific subevent's static photo gallery.

10. **Step 10: Connect All Navigation & Basic Interactivity**
    - **Goal:** Ensure all UI flows are connected and add minor UI state logic.
    - **Tasks:** Thoroughly test all navigation paths (forward and back). Implement basic UI state changes (e.g., filter chip selection appearance). Review theme consistency.
    - **Outcome:** A complete UI prototype with working navigation between all screens, using static data.

## Phase 2 & Beyond: Logic, Data, and Advanced Features

- Implement State Management (Context/Zustand/Redux).
- Integrate with Backend API (`services`).
- Implement real "Create/Join Event", "Create Subevent" saving logic.
- Implement Camera (`expo-camera`) & Photo Upload (`expo-image-picker`). (Ref: `Screenshot 2025-04-30 at 10.50.30.jpg`)
- Implement real "Invite/Copy Link/Code" logic (`expo-clipboard`, `react-native-qrcode-svg`).
- Implement QR Code Scanning (`expo-barcode-scanner`).
- Implement User Authentication.
- Refinements, error handling, loading states, notifications, etc.
