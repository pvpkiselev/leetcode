function calculateCoins(amount) {
    const coins = [10, 5, 2, 1];
    const result = {};

    for (const coin of coins) {
        if (amount >= coin) {
            const count = Math.floor(amount / coin);
            result[coin] = count;

            amount -= count * coin;
        }
    }

    return result;
}

console.log(calculateCoins(25));