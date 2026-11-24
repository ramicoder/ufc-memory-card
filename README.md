# UFC Memory Card Game

A UFC-themed memory card game built as a hands-on project to practice React state, props, useEffect, and asynchronous JavaScript. The game fetches fighter data from an API and challenges you to remember which cards you’ve already selected.

## Preview

## [Play the game](https://ufc-memory-card.vercel.app/)

## Game Rules

1. Select a ufc card to score a point.
2. After each selection, the cards are shuffled.
3. Choose a card you haven’t selected before. Selecting the same card twice resets your score.
4. Try to get the highest score!

## Features

- UFC cards loaded from an API
- Asynchronous data fetching
- Shuffled cards after each turn
- Score tracking
- Best-score tracking
- Win and game-over states

## Concepts Practiced

- **React state:** Tracking the current score, best score, selected fighters, and game status.
- **Props:** Passing fighter data and event handlers between components.
- **useEffect:** Loading game data when the component mounts and responding to relevant state changes.
- **Async JavaScript:** Fetching API data and handling loading or error states.

## Built With

- React
- JavaScript
- CSS
- [GIPHY API](https://developers.giphy.com/)

## Future Improvements

- Add difficulty levels with different numbers of cards.
- Add animations for card flips and shuffling.
- Improve error handling for failed API requests.
- Make the layout responsive for mobile screens.

## Acknowledgments

- Fighter images and GIFs are provided by the [GIPHY API](https://developers.giphy.com/).
- Background image sourced via Pinterest.
