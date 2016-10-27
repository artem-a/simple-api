import Mixin from 'ember-metal/mixin';
import get from 'ember-metal/get';
import { log } from 'ember-debug';

export default Mixin.create({
  actions: {
    savePost() {
      const post = get(this, 'controller.post');
      console.log(post.changedAttributes());

      return post.save()
        .then(() => this.transitionTo('dashboard.posts'))
        .catch((err) => log(err));
    },

    cancelPost() {
      this._rollbackPost();
    },

    willTransition() {
      this._rollbackPost();
    }
  },

  _rollbackPost() {
    const post = get(this, 'controller.post');
    post.rollbackAttributes();
  }
});
