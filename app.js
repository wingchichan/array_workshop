const blogPosts = ["blog1", "blog2", "blog3", "blog4"];
console.log(blogPosts);
console.log(blogPosts[0]);
console.log(blogPosts[3]);

blogPosts[4] = "blog5";
console.log(blogPosts);

blogPosts.unshift("noBlog");
console.log(blogPosts);

// blogPosts.pop();
// console.log(blogPosts);
// blogPosts.pop();
// console.log(blogPosts);
// blogPosts.push("blog8");
// console.log(blogPosts);

blogPosts.pop();
console.log(blogPosts);
blogPosts.pop();
console.log(blogPosts);
