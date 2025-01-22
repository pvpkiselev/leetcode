/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

 function guessNumber(n: number): number {
	let min = 0
	let max = n

	while(min <= max){
			let mid = Math.floor((max + min)/2)
			let num = guess(mid)

			if(num === -1){
					max = mid - 1
			} else if (num === 1){
					min = mid + 1
			} else{
					return mid
			}
	}

	return n
};
