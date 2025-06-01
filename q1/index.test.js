const DistributeCandies = require('./index.js');

test("Distribute Candies Among Children ||", () => {
    expect(DistributeCandies(1,2)).toBe(3);
})