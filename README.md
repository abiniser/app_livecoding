# React Native Technical Interview: Product Feed

Welcome! This repository contains a simplified product catalog screen with several common performance bottlenecks and UX opportunities.

## 🚀 Running the App

1. `npm install`
2. `npx expo start`
3. Press `w` for web, or scan with **Expo Go** on your device.

---

## 🎯 The Challenge

Take a look at [`src/screens/ProductCatalogScreen.tsx`](./src/screens/ProductCatalogScreen.tsx). You have full freedom to refactor, redesign, and improve the code as you see fit.

### 1. Fix Core Performance Issues
Users have reported that:
* Typing into the search bar drops frame rates and causes the entire list to stutter.
* Tapping the "Like" button feels sluggish and freezes the screen momentarily.
* Tapping an item while the keyboard is open doesn't register on the first touch.

Diagnose what is happening under the hood and make the screen run at a smooth 60fps.

#### A. Search and card renders

1. Tap the render counter to reset it.
2. Type into the search field one character at a time.
3. Watch how many product cards render after each keystroke.

Investigate why cards that did not change still render. Improve the screen so search remains responsive and unchanged cards do not do unnecessary work. Be ready to demonstrate the difference with the counter.

#### B. Like responsiveness and failures

The mock Like request deliberately takes either **200 ms or 700 ms**, and every **fifth request fails**. Currently, the heart can feel delayed and failure handling is incomplete.

Make the interaction feel immediate while keeping the displayed state trustworthy when a request fails. The app must not leave an unhandled rejection or a loading state that no longer reflects reality.

#### C. Filtering and item identity

Search changes the position of products in the visible array. Confirm that each rendered card keeps the correct identity as items are filtered or reordered.

#### D. Keyboard and taps

Focus the search field so the keyboard is visible, then tap a Like button. The first tap may dismiss the keyboard without activating the button. Make a handled control respond on the first tap.

### 2. UI / UX Polish (Show Your Taste)
You have creative freedom to improve the UI/UX of this screen. We want to see your mobile design sense:
* Make the cards and interactions feel responsive, tactile, and native.
* Address any missing states (e.g. empty search results, layout polish, touch feedback).
* Take whatever creative liberties you like to make the experience feel premium!

At minimum, review:

* The Like control's effective touch target and pressed feedback.
* Accessibility role, label, and selected state.
* What the user sees when a search has no matches.
* Whether the layout remains clear on a small phone.

### 3. Edge Cases & Resilience
Consider real-world mobile conditions (e.g. rapid tapping, flaky network). How resilient is the "Like" interaction against race conditions or network failures, and how would you handle it?

Test these cases:

1. Tap the same product several times quickly. Requests finish out of order because the mock alternates between slow and fast responses.
2. Like two different products before either request finishes.
3. Trigger the fifth request and verify failure recovery.

Your solution should preserve the latest user intent. You may implement the approach you consider appropriate or explain what you would add in production. Be prepared to discuss its tradeoffs.

---

## ✅ What to demonstrate at the end

You do not need to build every possible enhancement. Prioritize the highest-impact problems and show:

1. Search while observing the render counter.
2. Immediate Like feedback.
3. Correct recovery from the fifth-request failure.
4. Rapid repeated taps on one product.
5. Concurrent Likes on two products.
6. A search with no results.
7. A Like tap while the keyboard is open.

Explain the problem you found, why your change works, and what you would improve with more time.

---

> **Note on AI Tools:** Feel free to use AI assistants (ChatGPT, Copilot, Cursor). We care most about your thought process, design taste, and your ability to explain **why** you made each decision.

Have fun with it!
