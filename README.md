# Theo React Native Components

## Overview

Base React Native (+ supposedly React Native Web, but this seems to be buggy af)
components for Theo.

> **NOTE** this is written in TypeScript, and the library simply exports all the
> .tsx components. If the app using it does not understand TypeScript, none of this
> will work (_currently_).

## Installing the library

> **NOTE** This currently will not work until the GH package is properly set up.

```
yarn add @thingco/theo-component-library
```

> The library expects React, React Native and React Native SVG all installed as
> peer dependencies.

## Using the library

```
import { Button, Pill, Text } from "theo-component-library";
```

For simplicity, I would advise aliasing the Style import, like:

```
import { Style as s } from "theo-component-library";
```

As you're going to want to do:

```
<MyComponent style={[s.align_center, s.bg_dark]} />
```
