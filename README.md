# Babel Plugin Range Operators

Foreach creates a range from start point to end point inclusive

## Installation

```
npm install babel-plugin-range-operators --dev
```

## Input

```javascript
'[0...10]'.foreach((index) => {
  console.log(index)
})
```

## Output

```javascript
[0,1,2,3,4,5,6,7,8,9,10].foreach((index) => {
  console.log(index)
})
```

## Uses

```javascript
{
  "plugins": ["range-operators"]
}

```
