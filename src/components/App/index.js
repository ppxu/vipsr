import Vue from 'vue';
import store from '../../vuex/store';

export default Vue.extend({
  store,
  template: require('./index.html'),
  replace: false,
  vuex: {
    getters: {
      title: state => state.title,
      path: state => state.route.path
    }
  }
});
