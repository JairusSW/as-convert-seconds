# Convert-Seconds
**Convert Seconds To Hours, Minutes, And Seconds**

## About
- AssemblyScript Compatible
- Isomorphic (Browser / Node)

## Installation
```bash
~ npm install as-convert-seconds --save
```

## Usage

**Basic Usage**
```js
import { convertSeconds } from 'as-convert-seconds'

const formatted = convertSeconds('4923')
//=> Array<number> [Hours, Minutes, Seconds]

console.log('Hours:' + formatted[0])
// 1h
console.log('Minutes:' + formatted[1])
// 22m
console.log('Seconds:' + formatted[2])
// 3s
```

## API

### convertSeconds(seconds: string) -->> Array<number>
Convert Seconds To Hours, Minutes, And Seconds And Return An Array In The Same Order. (hr, mim, sec)