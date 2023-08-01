import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem("JWT_token"),
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.isLoggedIn = value;
    },
  },
  actions: {
    fetchLoggedIn({ commit }) {
      commit("SET_LOGGED_IN", !!localStorage.getItem("JWT_token"));
    },
  },
});
