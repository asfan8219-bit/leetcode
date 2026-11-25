/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(account){
    let maxWealth = -Infinity
    for(let i=0; i<account.length; i++){
        let sum = 0
        for(let j=0; j<account[i].length; j++){
            sum = sum + account[i][j]     
        }
        if(sum>maxWealth){
            maxWealth = sum
        }
    } 
    return maxWealth
}
let account = [[1,2,3],[3,2,1]]
console.log(maximumWealth(account))