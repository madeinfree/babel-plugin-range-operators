export default function (babel) {
  const { types: t } = babel;

  const parseToInt = (str, ary) => {
    return parseInt(str, ary)
  }

  const parserNumber = (stringLiteral) => {
    if (stringLiteral) {
      const min = parseToInt(stringLiteral.match(/\d*\.\.\d*/)[0].split('..')[0], 10)
      const max = parseToInt(stringLiteral.match(/\d*\.\.\d*/)[0].split('..')[1], 10)
      if (min >= max) return [t.NumericLiteral(min)]
      let orderArray = []
      for(let i = min; i < max; i++) {
        orderArray.push(t.NumericLiteral(i))
      }
      return orderArray
    }
  }

  return {
    name: "ast-transform", // not required
    visitor: {
      ExpressionStatement(path) {
        const { node } = path
        if (node.expression.type === 'CallExpression') {
          let calleeIsMap = t.isIdentifier(node.expression.callee.property, {name: 'map'})
          let isStringLiteral = t.isStringLiteral(node.expression.callee.object)
          if (!calleeIsMap || !isStringLiteral) {
            path.skip()
          } else {
            const cycleArr = parserNumber(node.expression.callee.object.value)
	          if (cycleArr) {
    	        node.expression.callee.object = t.ArrayExpression(cycleArr)
        	  }
          }
        }
      }
    }
  };
}
