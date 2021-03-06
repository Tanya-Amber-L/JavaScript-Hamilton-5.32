/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let getPosts = async () => {
    let posts = await window.lib.getPosts();

    const postComments = await Promise.all(
      posts.map((post) => {
        return window.lib.getComments(post.id);
      })
    );

    postComments.forEach((comments, index) => {
      posts[index].comments = comments;
    });

    // console.log(posts);
    return posts;
  };
  // your code here
  document.getElementById("run").addEventListener("click", async () => {
    let newPost = await getPosts();

    newPost.forEach((post) => {
      console.log(post.comments);
    });
  });

  // const programme = async () => {
  //   let articles = await window.lib.getPosts();

  //   articles.forEach(async (article) => {
  //     article.comments = await result(article.id);
  //   });
  //   console.log(articles);
  // };
  // let result = async (article) => {
  //   let comments = await window.lib.getComments(article);
  //   // console.log(comments);
  //   return comments;
  // };
  // programme();
})();
