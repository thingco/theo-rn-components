# Changelog


## [0.4.0] - 2019-08-29

### Added

- Add RewardCard/FullScreenRewardCard + styling
- Add stories for above.
- Add special styling for elements used to produce a "punchcut" visual effect on
  reward cards. 

### Changed

- Change Link component API (BREAKING CHANGE): RN's `Linking` module now used
  directly, so the component needs to be passed a string URL instead of a callback.
- Change ImageCard component API (BREAKING CHANGE): To allow for flexibility,
  the `sourceUrl` prop has been changed to `source`, and accepts the same parameter
  as the RN `Image` component.

### Removed

- Remove padding from Screen component (this should be handled by child components)


## [0.3.0] - 2019-08-20

### Added

- TypeScript dependency and config in root directory, allowing compilation from
  TypeScript in `dev/` to JavaScript in `dist/`.
- Typings for all components to allow TS compilation. 
- `tslint` with custom rules.
- Scripts in root for clean and build of `dist/`.

### Changed

- `theo-styleguide/` renamed to `dev/`.
- Colour functions moved from `Style` component to own file in `lib/` folder. 

## [0.2.0] - 2019-08-14

### Added

- Add conversion/formatting functions + basic tests in the `lib/` folder:
  1. `math-functions` contains some math utilities missing from JS to check and
  change numbers. These are used in the next two modules + the tests.
  2. `date-functions.ts` contains two functions, converting unix timestamps to
  dates and to times. It also contains a guard function to deal with how we store
  timestamps & to throw errors if faced with a mismatched format.
  3. `quantity-functions` contains a function to convert from km -> miles. As
  the calculation is [natch] exactly the same for kmph -> mph, only the one is
  needed.
- Used the conversion/formatting functions to build out Date/Time/Distance/Speed
  components.
- Add smoke tests for most components.
- Add stories for all components that don't have them.
- Add Storybook's `knobs` attachment, and applied it to some of the stories to
  provide configurable props.
- Add `concurrent` as a dev dependency to ensure the TS compiler runs at the
  same time as the Metro Bundler, allowing the project to be typechecked.
- Add tslint + some rules.
- Add a `use-preferences` hook, which exports a `Preferences` context. This
  needs to be tested, but will be added into the app high up the component tree,
  and the state populated when the user details are first fetched. At the minute,
  it only contains the unit preference (metric or imperial) and the locale (this
  will be "en-GB" for the forseeable).
- Add CircleCI config.

### Changed

- Change the rsync script that copies the components to include the hooks and
  lib folders.

### Removed

- Remove unused/aborted attempts at components.


## [0.1.0] - 2019-08-12

### Added

- Add Expo project (`theo-styleguide`) in subfolder. This is the development
  environment for the library, using [Storybook](https://storybook.js.org/).
- Port across first set of components, added stories.
- Port across some experimental components to exercise other RN functionality
  (tabs, modal).
- Base package.json setup in project root to ready it for publication.