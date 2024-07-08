
# Calculator

Use `calculator` to perform basic arithmetic operations.

## Functions

The `calculator` module provides the following functions:

### `add`

Adds two numbers.

```typescript
function add(a: number, b: number): number
```

#### Parameters

- `a`: The first number.
- `b`: The second number.

#### Returns

The sum of `a` and `b`.

### `subtract`

Subtracts the second number from the first number.

```typescript
function subtract(a: number, b: number): number
```

#### Parameters

- `a`: The first number.
- `b`: The second number.

#### Returns

The difference between `a` and `b`.

### `multiply`

Multiplies two numbers.

```typescript
function multiply(a: number, b: number): number
```

#### Parameters

- `a`: The first number.
- `b`: The second number.

#### Returns

The product of `a` and `b`.

### `divide`

Divides the first number by the second number.

```typescript
function divide(a: number, b: number): number
```

#### Parameters

- `a`: The first number.
- `b`: The second number.

#### Returns

The quotient of `a` divided by `b`.

### `square`

Squares a number.

```typescript
function square(x: number): number
```

#### Parameters

- `x`: The number to be squared.

#### Returns

The square of `x`.

#### Throws

- `Error` if `b` is 0 (division by zero is not allowed).

## License

MIT
