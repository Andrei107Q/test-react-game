export const StatisticPage = () => {
  const statisticData = JSON.parse(localStorage.getItem('statistic'))
  let StatisticTable

  if(statisticData) {
    statisticData.sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    });


    StatisticTable = statisticData.map((plyer) => {
      return (
        <tr>
          <td>{plyer.name}</td>
          <td>{plyer.lastName}</td>
          <td>{plyer.score}</td>
        </tr>
      )
  
    })

  }



 
  if(statisticData) {
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Score</th>
            </tr>
          </thead>

          <tbody>
            { StatisticTable ?  StatisticTable : 'No statistic yet'}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="container">
      <h4>No statistics yet</h4>
    </div>
  )
}