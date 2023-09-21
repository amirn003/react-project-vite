import { useState } from "react";
import { Tweet } from "./Tweet";
import { TweetList } from "./TweetList";

const DEFAULT_TWEET =
[
  {
    id: 0,
    name: "Toto",
    content: "Je vais bien!",
    like:1000
  },
  {
    id: 1,
    name: "Didier",
    content: "Cool",
    like:20
  },
  {
    id: 2,
    name: "Titi",
    content: "SUPER",
    like:0
  },
  {
    id: 3,
    name: "Tom",
    content: "Fun",
    like:19
  }
]

function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);
  const [username, setUsername] = useState("Toto");

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const name = event.target.name.value;
    const content = event.target.content.value;

    console.log("NAME", name)

    const newTweet = {
      id: tweets[tweets.length - 1]?.id +1 ?? 0,
      name,
      content,
      like: 0
    }
    addTweet(newTweet);
  };

  const addTweet = (newTweet) => {
    setTweets([...tweets, newTweet]);
    console.log(newTweet);
  };

  const addLetter = () => {
    // username += "a"
    // console.log(username)
    // setUsername(username + "a")
    setUsername((curr) => curr + "a")
  }

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr];
      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweet.like += 1;
      return copyTweet;
    })
  }

  return (
      <div>

      <form onSubmit={(e) => handleSubmit(e)} className="tweet-form">
        <h4>New Tweet</h4>
        <input placeholder="name" type="text" name="name"/>
        <input placeholder="content" type="content" name="content"/>
        <input type="submit"/>
      </form>
      <button onClick={addLetter}>Ajouter une lettre</button>

      <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
      </div>

  );
}

export default App;
