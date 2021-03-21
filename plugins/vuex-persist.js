import VuexPersistence from 'vuex-persist'

// https://github.com/championswimmer/vuex-persist
export default ({ store }) => {
  new VuexPersistence({
    /* your options */
  }).plugin(store)
}
