import Component from 'ember-component';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  actions: {
    addTag() {
      const tags = get(this, 'post.tags');
      tags.pushObject('');
    },

    // TODO: fix tag update
    updateTag(index, value) {
      // const tags = get(this, 'post.tags');
      // tags.removeAt(index);
      // tags.insertAt(index, value);
      // const post = get(this, 'post');
      // const tags = get(post, 'tags').map((t, i) => (i === index) ? value : t );
      // set(tags, `${index}`, tags[index] + value);
      // tags[index] += value;
      // console.log(tags);
      // post.notifyPropertyChange('tags');
    },

    addLabel() {
      const labels = get(this, 'post.labels');
      labels.pushObject({});
    },

    // TODO: fix label update
    updateLabel(index, value) {
      // const post = get(this, 'post');
      // const labels = get(post, 'labels');
      // const labels = get(post, 'labels').map(({ key }) => {
      //   return { key };
      // });
      // set(labels[index], 'key', value);
      set(this, `post.labels.${index}`, { key: value });
      // set(post, 'labels', labels);
    }
  }
});
