import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
  strict: true,     //严格模式——只能由mutation修改状态
  state: {
      article_list: [],
      cur_page: 0
  },
  mutations: {
      appendArticleList(state, arg) {
        state.article_list=state.article_list.concat(arg);
      },
      addPage(state, arg) {
        state.cur_page++;
      }
  },
  actions: {
      async loadOneMorePage({state, commit}, arg) {
        let data=await (await fetch(`http://localhost:8090/list?page=${state.cur_page}`)).json();

        commit('appendArticleList', data);
        commit('addPage');
      }
  },
  getters: {
      list_data(state) {
          if(state.cur_page==0){
              store.dispatch('loadOneMorePage');
          }
          return state.article_list;
      }
  }
});

export default store;
