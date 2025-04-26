// Helper function to find the extreme value (max or min) between two numbers
const findExtremeValue = (a, b, isMax = true) =>
	isMax ? (a > b ? a : b) : a < b ? a : b;

const multiplyBiggerNumByTwo = (num1, num2) => {
	const bigNum = findExtremeValue(num1, num2);
	return bigNum * 2;
};

const divideBiggerNumByThree = (num1, num2) => {
	const bigNum = findExtremeValue(num1, num2);
	return bigNum / 3;
};

const eatMostTacos = (sum1, sum2) => {
	const bigNum = findExtremeValue(sum1, sum2);
	return `I ate ${bigNum} tacos.`;
};

const adoptSmallerDog = (weight1, weight2) => {
	const smallDog = findExtremeValue(weight1, weight2, false);
	return `I adopted a dog that weighs ${smallDog} pounds.`;
};

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
	multiplyBiggerNumByTwo,
	divideBiggerNumByThree,
	eatMostTacos,
	adoptSmallerDog,
};
