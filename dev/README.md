# Theo RN Components development environment 

## Overview

Base React Native (+ supposedly React Native Web, but this seems to be buggy af)
components for Theo.

The app simply renders a [Storybook](https://storybook.js.org/),
which allows for a _relatively_ pleasant fully visual development experience.


## Development

Install [expo-cli](https://docs.expo.io/versions/v34.0.0/introduction/installation/)
on your computer, and install the Expo client on your phone.

Then clone this repo and run

```
yarn
```

To install all the dependencies. Then run

```
expo start
```

To kick off the bundler. It will open a browser tab showing progress. There will
be a QR code shown there and in your teerminal -- open the Expo client on your
phone and scan the QR code to load the app. You can now start developing, and
the watcher will update the app on your phone as you go. It will also work just
fine from a simulator on your computer. It should also work as a web app, but
this part is buggy as hell so expect it to just break.