const DistributeCandies = (n, limit) => {
    // Helper to compute nCk
    const comb = (n, k) => {
        if (k < 0 || k > n) return 0;
        // nCk = n! / (k! * (n-k)!)
        // For small k, compute directly to avoid overflow
        let res = 1;
        for (let i = 1; i <= k; i++) {
            res = res * (n - i + 1) / i;
        }
        return Math.round(res);
    };

    // Number of non-negative integer solutions to a+b+c=n
    // with 0 <= a,b,c <= limit
    // Inclusion-Exclusion Principle
    let res = 0;
    for (let mask = 0; mask < 8; mask++) {
        let sum = n;
        let bits = 0;
        for (let i = 0; i < 3; i++) {
            if ((mask >> i) & 1) {
                sum -= (limit + 1);
                bits++;
            }
        }
        let ways = comb(sum + 2, 2);
        if (bits % 2 === 0) res += ways;
        else res -= ways;
    }
    return res;
}

module.exports = DistributeCandies;