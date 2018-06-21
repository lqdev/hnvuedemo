/**
 * Checks whether the item is a story
 * @param {Object} story - Story object
 */
function isStory(story) {
    return story.type == 'story'
}

/**
 * Gets ids of stories
 * @param {string} url - Url to fetch story ids 
 */
function getIds(url) {
    return axios.get(url)
}

/**
 * Builds GET requests for each of the story ids
 * @param {Array} ids - List of story ids 
 */
function buildRequest(ids) {
    var requests = ids.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`));
    return requests;
}

/**
 * 
 * @param {Array<Promise>} requests - List of unresolved promises  
 */
function getStories(requests) {
    return axios.all(requests);
}

/**
 * 
 * @param {Array<Object>} - List of resolved promises 
 */
function extractStories(...responses) {
    var stories = responses.map(story => story = story.data);
    return stories.filter(isStory);
}

