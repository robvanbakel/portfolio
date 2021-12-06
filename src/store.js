import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      lang: null,
      meta: {},
    }
  },
  getters: {
    lang(state) {
      return state.lang
    },
    meta(state) {
      return state.meta
    },
  },
  mutations: {
    setLang(state, payload) {
      state.lang = payload.lang
      state.meta = payload.meta
    },
  },
  actions: {
    getLang(context) {
      let lang = window.location.host.split('.').pop()

      if (lang !== 'nl') lang = 'en'

      const setLang = (lang) => {
        context.commit('setLang', { lang, meta: require(`@/assets/${lang}_meta.json`) })
        document.documentElement.lang = lang
      }

      setLang(lang)
    },
  },
})

export default store
