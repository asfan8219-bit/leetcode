/**
 * @param {number[]} prices
 * @return {number}
 */

 function maxProfit(prices){
    let minprice = prices[0]
    let maxprofit = 0

    for(let i=0; i<prices.length; i++){
        if(prices[i]<minprice){
            minprice = prices[i]
        }else{
            let profit = prices[i]-minprice
            if(profit > maxprofit){
                maxprofit = profit
            }
        }
    }
    return maxprofit
 }
const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))