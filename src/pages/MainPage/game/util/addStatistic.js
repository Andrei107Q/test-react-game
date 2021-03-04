export const addStatistic = (player) => {
  const newGamer = {
    name: player.name, 
    lastName: player.lastName, 
    score: player.score
  }

  const AllStatistic = JSON.parse(localStorage.getItem('statistic'))
  if (AllStatistic) {
    AllStatistic.push(newGamer)
    localStorage.setItem('statistic', JSON.stringify(AllStatistic))
  } else {
    localStorage.setItem('statistic', JSON.stringify([newGamer]))
  }
}