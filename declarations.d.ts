/**
 * The project is using [`react-native-svg-transformer`](https://github.com/kristerkari/react-native-svg-transformer) to allow direct
 * imports of svg files as if they were React components. This declaration adds
 * the necessary types, as specified in the README linked above.
 */
declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  const content: React.ComponentClass<SvgProps, any>
  export default content
}