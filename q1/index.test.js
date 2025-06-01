const DistributeCandies = require('./index.js');

test("Distribute Candies Among Children ||", () => {
    expect(DistributeCandies(5,2)).toBe(3);
})