#!/bin/bash


# Completely remove current dist/ dir...
rm -rf dist/
# ...then copy typescript components from the development folder (`theo-styleguide/`)
# to the `dist/` folder, where they are exposed as the component library.
rsync -avC \
      --exclude '_storybook/' \ # Storybook UI components
      --exclude "*.story.tsx" \ # Storybook examples
      --include='*/' \ # include all subdirectories
      --include='*' \ # include all remaining files
      --prune-empty-dirs \
       theo-styleguide/components/ dist/