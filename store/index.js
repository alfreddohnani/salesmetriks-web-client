export const state = () => ({
  routerLoadingEnable: true
});
export const mutations = {
  setRouterLoadingEnable(state, payload) {
    state.routerLoadingEnable = payload;
  }
};
