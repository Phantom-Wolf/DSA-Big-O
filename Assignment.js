// 1:  1) constant. One action, one result
//     2) linear. same action per person in list

// 2:  constant. number of operations do not change based on input
// 3:  polynomial. loop within a loop n^2
// 4:  linear. same single action per value in list
// 5:  linear. performing one comparison per item in list
// 6:  polynomial. cycle through inner loop before moving to next tick of outer loop
// 7:  linear. It is performing one condition action per position in array. fibbonaci sequence
// 8:  log(n). cuts working values in half with each cycle until finds answer
// 9:  constant. one input, one random output
// 10: linear. prime number finder. time grows at same rate as input growth

// 11:

const rods = {
	A: [3, 2, 1],
	B: [],
	C: [],
};
let moves = 0;

const displayRods = (rods) => {
	let newRods = Object.keys(rods);
	newRods.forEach((rod) => console.log(rod + ": " + rods[rod]));

	console.log(`${moves} moves`);
	moves++;
	console.log("\n");
};
displayRods(rods);

const towerOfHanoi = (n, sourceRod, destinationRod, bufferRod) => {
	// Our base case is implicitly when n, the height of our stack of disks, gets down to zero.

	if (n >= 1) {
		towerOfHanoi(n - 1, sourceRod, bufferRod, destinationRod);

		console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);

		rods[bufferRod].push(rods[sourceRod].pop());
		rods[destinationRod].push(rods[bufferRod].pop());

		displayRods(rods);

		towerOfHanoi(n - 1, bufferRod, destinationRod, sourceRod);
	}
	return;
};
towerOfHanoi(3, "A", "C", "B");


