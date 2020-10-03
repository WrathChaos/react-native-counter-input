<img alt="React Native Counter Input" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-counter-input)

[![Counter Input with fully customizable options for React Native](https://img.shields.io/badge/-Counter%20Input%20with%20fully%20customizable%20options%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-counter-input)

[![npm version](https://img.shields.io/npm/v/react-native-counter-input.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-counter-input)
[![npm](https://img.shields.io/npm/dt/react-native-counter-input.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-counter-input)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Counter Input"
        src="assets/Screenshots/typescript.jpg" />
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

| Property |  Type   | Default | Description                                             |
| -------- | :-----: | :-----: | ------------------------------------------------------- |
| outline  | boolean |  true   | make the button outline                                 |
| solid    | boolean |  false  | make the button with a solid background and a shadow    |
| gradient | boolean |  false  | make the button with a gradient background and a shadow |
| width    | number  |   150   | change the button's width                               |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Counter Input is available under the MIT license. See the LICENSE file for more info.
