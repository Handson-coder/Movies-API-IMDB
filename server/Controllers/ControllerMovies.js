const axios = require('axios')

class ControllerMovies {
  static async findAllPopularMovies(req, res) {
    try {
      const result = await axios.get(`https://imdb8.p.rapidapi.com/title/get-most-popular-movies`, {
        params: { homeCountry: 'US', purchaseCountry: 'US', currentCountry: 'US' },
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '033b750442msha7490197ffafd5dp1ca9ffjsn552e1c220f09'
        }
      })
      res.status(200).json(result.data)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async detailMovie(req, res) {
    try {
      const { id } = req.params
      const result = await axios.get(`https://imdb8.p.rapidapi.com/title/get-details`, {
        params: { tconst: id },
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '033b750442msha7490197ffafd5dp1ca9ffjsn552e1c220f09'
        }
      })
      res.status(200).json(result.data)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = ControllerMovies