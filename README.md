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

### 2. UI / UX Polish (Show Your Taste)
You have creative freedom to improve the UI/UX of this screen. We want to see your mobile design sense:
* Make the cards and interactions feel responsive, tactile, and native.
* Address any missing states (e.g. empty search results, layout polish, touch feedback).
* Take whatever creative liberties you like to make the experience feel premium!

### 3. Edge Cases & Resilience
Consider real-world mobile conditions (e.g. rapid tapping, flaky network). How resilient is the "Like" interaction against race conditions or network failures, and how would you handle it?

---

> **Note on AI Tools:** Feel free to use AI assistants (ChatGPT, Copilot, Cursor). We care most about your thought process, design taste, and your ability to explain **why** you made each decision.

Have fun with it!
