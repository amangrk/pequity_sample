import Api from '@/services/Api'

export default {
  getBeers () {
    return Api().get('/beers');
  },
}
