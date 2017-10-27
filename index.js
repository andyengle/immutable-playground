const { Seq } = require('immutable')

function not(predicate) {
	return function() {
		return !predicate.apply(this, arguments);
	}
}


const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
	.filter(not(x => x % 2 !== 0))
	.map(x => x * x)

console.log(oddSquares);
