import axios from '../plugins/axios';
import { Promise } from 'q';

export const state = () => ({ users: [], items: [] });
export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setItems(state, items) {
    state.items = items;
  }
};
export const actions = {
  async LOAD_ITEMS({ commit }, dataUrl) {
    const response = await axios.get(dataUrl);
    const ids = response.data;
    const itemIds = ids.slice(0, 10);
    const itemsPromises = itemIds.map(id => axios.get(`item/${id}.json`));
    const itemResponses = await Promise.all(itemsPromises);
    const items = itemResponses.map(res => res.data);
    commit('setItems', items);
  }
};
