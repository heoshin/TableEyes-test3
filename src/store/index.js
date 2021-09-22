import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allStoresOri: [],
    curStores: [],

  },
  getters: {
  },
  mutations: {
    initStores: (state, payload) => {
      state.allStoresOri = payload
      state.curStores = payload
    },
    setCurStores: (state, payload) => { 
      state.curStores = payload
    }
  },
  actions: {
    loadAllStoresFromServer: context => {
      axios
        .get("http://koldin.myddns.me:4004/store/type/id/category")
        .then((res) => {
          console.log(res);
          context.commit("initStores", res.data)
        });
    }
  },
  modules: {
  }
})
