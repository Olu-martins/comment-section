

const tweetForm = document.querySelector('#tweetForm');
const tweet = document.querySelector('#tweet');
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e){
    e.preventDefault(e);
    const comment = tweet.value;
    const newtweet = document.createElement('h5')
    newtweet.classList = 'newtweet'
    newtweet.innerText = comment; 
    tweets.append(newtweet)   
    tweet.value = "";
})