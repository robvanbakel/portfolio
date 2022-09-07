import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      lang: null,
      meta: {},
    };
  },
  getters: {
    lang(state) {
      return state.lang;
    },
    meta(state) {
      return state.meta;
    },
  },
  mutations: {
    setLang(state, payload) {
      state.lang = payload.lang;
      state.meta = payload.meta;
    },
  },
  actions: {
    getLang(context) {
      let lang = window.location.host.split('.').pop();

      if (lang !== 'nl') lang = 'en';

      const setLang = (selectedLang) => {
        context.commit('setLang', { lang: selectedLang, meta: require(`@/assets/${selectedLang}_meta.json`) });
        document.documentElement.lang = selectedLang;
      };

      setLang(lang);
    },
  },
});

export default store;
