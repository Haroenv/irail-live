import xhr from 'xhr'

export default {
  state: {
    /* initial values of state inside the model */
    title: 'Set the title',
    stations: [],
    station: {}
  },
  reducers: {
    /* synchronous operations that modify state. Triggered by actions. Signature of (data, state). */
    updateTitle: (data, state) => ({
      title: state.value
    }),
    stations: (data, state) => ({
      stations: state
    }),
    station: (data, state) => ({
      station: state
    })
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    requestStation: (data, state, send, done) => {
      xhr(`https://api.irail.be/liveboard/?id=${state}&format=json`, {
        json: true
      }, (err, res, body) => {
        if (res.statusCode === 200) {
          send('station', body, done)
        }
      })
    }
  },
  subscriptions: {
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    /*
    mySubscription: (send, done) => {
      // do stuff
    }
    */
    getAllStations(send, done) {
      // use https://cdn.rawgit.com/iRail/stations/master/stations.csv
      xhr('https://api.irail.be/stations/?format=json', {
        json: true
      }, (err, res, body) => {
        if (res.statusCode === 200) {
          send('stations', body.station, done)
        }
      })
    }
  }
}
