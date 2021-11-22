# Tinkoff VoiceKit

Library for converting speech to text and vice versa.

## Quick Start
### Installation
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install tinkoff-voicekit
```

### Usage
```typescript
import { TinkoffLongRunning, TinkoffSpeechToText } from 'tinkoff-voicekit'

const stt = new TinkoffSpeechToText(TINKOFF_VOICEKIT_API_KEY, TINKOFF_VOICEKIT_PRIVATE_KEY)
const longRunning = new TinkoffLongRunning(TINKOFF_VOICEKIT_API_KEY, TINKOFF_VOICEKIT_PRIVATE_KEY)
```

## Resources
- See full API documentation in the [Document Center](https://voicekit.tinkoff.ru/docs/)

## License
This software is licensed under the BSD 3-Clause License. [View the license](LICENSE.md).
