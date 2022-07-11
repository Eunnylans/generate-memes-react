import React from "react";
import MemeFactory from "./MemeFactory";
import Memes from "./Memes";

export const App = () => {
  return (
    <div>
      <h1>Meme Generator</h1>
      <Memes />
      <MemeFactory />
    </div>
  );
};

// <h1>React Meme Factory</h1>
// <p>Memes were once just thought to be the weird
//   pictures that parts of the internet made to entertain
//   themselves. Today, you can see them in everyday social
//   media interaction, used and shared and consumed every minute.</p>

//   <p>Memes have emerged as one of the primary methods of
//     communication on the internet, and have permeated pop
//     culture in an almost meta fashion.</p>

// <p>Anything can become a meme, and now you too can help
//   facilitate that trend with a Meme Factory of your own!</p>

//   <h1>Your Mission</h1>

//   <p> Build a Meme Factory! You can use the imgflip API to
//     get some meme images to work on (https://api.imgflip.com/).
//   There’s an option to provide quote text directly with the API;
//   but we want to build our own UI around the concept, so we’re
//   not going to use that Of course, you’re free to use
//   another API if you find this one to be too limiting to your taste!
//   Other meme APIs: https://www.programmableweb.com/category/meme/api
// </p>
// <h1>How do I do that?</h1>

// <p>Level 1:Get some meme pictures from imgflip. Select the
//   first one to be the current meme picture Allow the user to
//   write some meme text at the top and bottom of that picture,
//   in a meme style Position that text over the current picture.
//   <h3> Hint: use the Impact font or something similar to make your
//   text look meme-like  (hint) Allow the user to change the
//   current picture (randomly or with back/next buttons)</h3> </p>

// <p> Level 2:Allow the user to upload their own picture to create
//   a meme <h3> (hint, hint)Make sure the text does not overflow from
//   the picture</h3> </p>

// <p> Level 3:Find a way to export that meme as a real picture
//   (hint), the useRef hook might come in handy here <h3> (hint)
//   Implement a reset button to remove the generated picture from the
//   DOM (if you injected it in the DOM) and/or clean the user input</h3>
