export default {
  data() {
    return {
      refreshKey: 'state-0',
    }
  },
  methods: {
    forceRefresh(){
      this.refreshKey === 'state-0' ? this.refreshKey = 'state-1' : this.refreshKey = 'state-0';
      console.log('forcefully refreshed', this.refreshKey);
    }
  }
}