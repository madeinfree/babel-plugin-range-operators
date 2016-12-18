# Babel Plugin Range Operators

For mapping array creates a range from start point to end point inclusive

## Input

```javascript
'[0...10]'.map((index) => {
  console.log(index)
})
```

## Output

```javascript
[0,1,2,3,4,5,6,7,8,9,10].map((index) => {
  console.log(index)
})
```

## Uses

```javascript
{
  "plugins": ["range-operators"]
}

```
