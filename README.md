# Santi's Basic Binet Formula Library

[![Build Status](https://github.com/santi100a/binet-formula/actions/workflows/ci.yml/badge.svg)](https://github.com/santi100a/binet-formula/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/binet-formula)](https://npmjs.org/package/@santi100/binet-formula)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/binet-formula.svg)](https://github.com/santi100a/binet-formula)
[![License](https://img.shields.io/github/license/santi100a/binet-formula.svg)](https://github.com/santi100a/binet-formula)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/binet-formula)](https://bundlephobia.com/package/@santi100/binet-formula@latest)

This is a lightweight and fast library that provides a basic implementation of Binet's Formula to calculate Fibonacci numbers using the golden ratio. Please keep in mind that this function may be prone to floating-point JavaScript imprecision.

- 📘 Comes with built-in TypeScript definitions
- 🚀 Lightweight and fast
- 👴 Compliant with ECMAScript 3

## API

- `function binetFormula(n: number): number;`

  Calculates the Fibonacci number at the given position using Binet's Formula.

  Binet's Formula is an efficient way to calculate Fibonacci numbers using the golden ratio.

  **Keep in mind this function may be prone to floating-point JavaScript imprecision.**

  | Name | Type     | Description                                                          | Optional? |
  | ---- | -------- | -------------------------------------------------------------------- | --------- |
  | `n`  | `number` | The positive integer position in the Fibonacci sequence to look for. | No        |

  Throws a `TypeError` if `n` is not a number, negative, or not an integer. Returns the Fibonacci number at position `n`.

## Usage

```typescript
import binet = require('@santi100/binet-formula'); // TypeScript
import binet from '@santi100/binet-formula'; // ESM
const binet = require('@santi100/binet-formula'); // CJS

// Example usage of the binet function
const fibonacciNumber = binet(5); // Calculate the Fibonacci number at position 5
console.log(fibonacciNumber); // Output: Approximately 5
```

Feel free to use this library to calculate Fibonacci numbers efficiently using Binet's Formula. The implementation supports various module systems, including TypeScript and CommonJS.

If you're curious, Binet's Formula is: $$ F_n = \frac{\varphi^n - \frac{1}{(-\varphi)^n}}{\sqrt{5}} $$
