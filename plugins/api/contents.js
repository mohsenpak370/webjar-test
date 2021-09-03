export default ({ app }, inject) => {
  const getPostCategories = async (limit = null, skip = null) => {
    try {
      const result = await app.$axios.$get('/post-categories', {params: {limit, skip}});
      return result;
    } catch (error) {

    }
  };
  inject('getPostCategories', getPostCategories);

  const getPosts = async () => {
    try {
      const result = await app.$axios.$get('/posts');
      return result;
    } catch (error) {

    }
  };
  inject('getPosts', getPosts);

  const getPost = async (channelId, params) => {
    try {
      const result = await app.$axios.$get(`/channels/${channelId}/contents`, {params});
      return result;
    } catch (error) {

    }
  };
  inject('getPost', getPost);
}
