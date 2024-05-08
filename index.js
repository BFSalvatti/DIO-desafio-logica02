function calculateRank(wins, losses) {
    let winBalance = (wins - losses)
    let level

    if (wins < 10) {
        level = "Iron"
    } else if (wins >= 10 && wins <= 20) {
        level = "Bronze"
    } else if (wins >= 21 && wins <= 50) {
        level = "Silver"
    } else if (wins >= 51 && wins <= 80) {
        level = "Gold"
    } else if (wins >= 81 && wins <= 90) {
        level = "Diamond"
    } else if (wins >= 91 && wins <= 100) {
        level = "Legendary"
    } else {
        level = "Immortal"
    }

    return (`The Hero has a balance of ${winBalance} and is at the level of ${level}`)
}

let message = calculateRank(63, 11)
console.log(message)
