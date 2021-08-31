import { createStore } from "vuex"

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
      
      const tld = window.location.host.split(".").pop()

      if (tld === "nl") {
        context.commit("setLang", { lang: "nl", meta: require("@/assets/nl_meta.json") })
      } else {
        context.commit("setLang", { lang: "en", meta: require("@/assets/en_meta.json") })
      }
    },
  },
})

export default store
