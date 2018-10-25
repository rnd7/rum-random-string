# rum-random-string
Rumbullion random string generator

See also:

[rum](https://github.com/rnd7/rum)

## Download
[builds](https://github.com/rnd7/rum-random-string/tree/master/dist)

## Installation

```bash
npm i @rnd7/rum-random-string

```
## Include

Via script tag
```
<script src="node_modules/@rnd7/rum-random-string/dist/rum-random-string-browser.js"></script>
```

Using require
```javascript
const randomString = require('@rnd7/rum-random-string').randomString
```

Using import
```javascript
import { randomString } from '@rnd7/rum-random-string'
```

## Usage
```javascript
console.log(randomString())
console.log(randomString(8))
console.log(randomString(8, "0123456789"))
```
## API

### Defaults
```javascript
export const RANDOM_STRING_DEFAULTS = {
  length: 16,
  charset: "abcdefghijklmnopqrstuvwxyz1234567890"
}
```

### randomString
```javascript
randomString(length, charset)
```
## Development

### Installation
Install dependencies such as rum-maker and rum-publisher
```bash
npm install
```

### Build
Production build
```bash
npm run build
```

### Publish
Publish to github and npm using
```bash
npx publish-rum -m "My commit message"
```

## License
See the [LICENSE](https://github.com/rnd7/rum-temporary-storage/tree/master/LICENSE.md) file for software license rights and limitations (MIT).
