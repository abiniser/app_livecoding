# React Native Live Coding Challenge

Improve a small product catalog during a **45-minute interview**. The starting code intentionally contains performance, interaction, and reliability problems.

## Run the app

You need Node.js and either Expo Go, an emulator, or a web browser.

```bash
npm install
npm start
```

Then press `a` for Android, `i` for iOS, or `w` for web.

Start in [`src/screens/ProductCatalogScreen.tsx`](src/screens/ProductCatalogScreen.tsx).

## Your task

Use the time in whatever order you think is most valuable.

1. **Improve the main interactions**
   - Searching currently makes the product list stutter.
   - Liking a product feels slow.
   - With the keyboard open, the first tap on a product may be lost.

2. **Improve the mobile experience**
   - Make taps feel clear and responsive.
   - Handle an empty search result.
   - Polish the layout where useful.

3. **Make Like reliable**
   - Consider rapid taps, overlapping requests, and request failures.
   - Implement what fits in the time, then explain any remaining tradeoffs.

## Helpful context

- The render counter at the top helps you observe committed renders while you work.
- The mock Like API intentionally changes its response time and occasionally fails.
- You may change any candidate-facing source file.
- You do not need to complete every possible improvement. Prioritize, test your main changes, and explain your decisions.
- AI tools are allowed. Be ready to explain the code and why you chose your approach.

## Before you finish

Show the interviewer the behavior you improved and briefly cover:

- the problem you found;
- how your change fixes it;
- any edge case or follow-up you would handle with more time.
