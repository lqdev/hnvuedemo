/**
 * Story Component
 */
Vue.component('story',{
    props: ['story'],
    template: `
        <div>
            <h3><a :href="story.url" target="_blank">{{story.title}}</a></h3>
        </div>
    `
});

/**
 * App Instance
 */
new Vue({
  el: "#app",
  data: {
    title: "Hacker News Vue Simple Reader",
    loading: true,
    topStories: []
  },
  methods: {
    getTopStories: function() {
      getIds("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        .then(ids => buildRequest(ids.data.splice(0,50))) //Only get first 50
        .then(getStories)
        .then(axios.spread(extractStories))
        .then(stories => {this.topStories = stories; this.loading=false;})
        .catch(e => console.log(e));
    }
  },
  created: function() {
      this.getTopStories();
  }
});
