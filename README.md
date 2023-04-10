<img alt="React Native Counter Input" src="assets/logo.png" width="1050"/>

[![Counter Input with fully customizable options for React Native](https://img.shields.io/badge/-Counter%20Input%20with%20fully%20customizable%20options%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-counter-input)

[![npm version](https://img.shields.io/npm/v/react-native-counter-input.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-counter-input)
[![npm](https://img.shields.io/npm/dt/react-native-counter-input.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-counter-input)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Counter Input"
        src="assets/Screenshots/RN-Counter-Input.png" width="49%" />
  <img alt="React Native Counter Input"
        src="assets/Screenshots/RN-Counter-Input.gif" width="49%" />
</p>

<p align="center">
  <img alt="React Native Counter Input"
        src="assets/Screenshots/RN-Counter-Input-Horizontal.png"  />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-counter-input
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": ">= 0.1.1",
```

# Usage

## Import

```jsx
import CounterInput from "react-native-counter-input";
```

## Fundamental Usage

```jsx
<CounterInput
  onChange={(counter) => {
    console.log("onChange Counter:", counter);
  }}
/>
```

# Configuration - Props

| Property                      |   Type    |  Default  | Description                                                                               |
|-------------------------------|:---------:|:---------:|-------------------------------------------------------------------------------------------|
| style                         |   style   |  default  | change/override the main container style                                                  |
| horizontal                    |  boolean  |   false   | make the button horizontal design                                                         |
| initial                       |  number   |     0     | set the initial value for the counter input                                               |
| onChange                      | function  | undefined | set your own logic for onChange method, it triggers on any change                         |
| onChangeText                  | function  | undefined | it triggers when the TextInput changes                                                    |
| onIncreasePress               | function  | undefined | it triggers when the increase button is pressed                                           |
| onDecreasePress               | function  | undefined | it triggers when the decrease button is pressed                                           |
| backgroundColor               |  string   |   #fff    | change the CounterInput's background color                                                |
| min                           |  number   | undefined | set a minimum input value                                                                 |
| max                           |  number   | undefined | set a maximum input value                                                                 |
| reverseCounterButtons         |  boolean  |   false   | reverse the counter buttons                                                               |
| increaseButtonBackgroundColor |  string   |  #0b349a  | change the CounterInput's active increase button background color                         |
| decreaseButtonBackgroundColor |  string   |  #0b349a  | change the CounterInput's active decrease button background color                         |
| ImageComponent                | component |   Image   | set your own Image component instead of default `RN Image` component such as; `FastImage` |

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~Horizontal Feature~~
- [ ] Animation
- [x] ~~Reverse Horizontal +/- Buttons Option~~
- [ ] Write an article about the lib on Medium

## Credits

Heavily Inspired by [Enes Kargıcı](https://dribbble.com/shots/6530185-Beats-Mobile-App-Concept-Design), thank you so much!

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Counter Input is available under the MIT license. See the LICENSE file for more info.
