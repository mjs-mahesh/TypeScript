"use strict";
// data
// initial Amount
// annual conribution
// expected annual return
// duration
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedAnnualReturn, duration } = data;
    if (initialAmount < 0 || annualContribution <= 0 || expectedAnnualReturn < 0 || duration <= 0) {
        return 'Invalid investment input';
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedAnnualReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('----------------------');
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedAnnualReturn: 0.08,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
