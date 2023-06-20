---
title: "understanding declarative javascript using monads"
date: "2023/05/03"
excerpt: "Monads in the simplest terms"
tags: "functional programming"
show: true
---

As software engineers, a significant part of our work involves creating data pipelines where several steps involve initializing and converting values based on different data sources. However, handling exceptions and potential errors at each step can quickly make the code hard to follow and nested. In this article, we explore how the Maybe monad can help simplify data pipelines and improve code readability.

### The problem

Let's consider the following scenario in a microblogging application: we want to determine the number of likes the first comment of a post has. The code might look like this:

```js
const postId = 34;
const postObject = repository.findOneById(34);
const postComments = postObject.comments;
const firstComment = postComments.first();
const numberOfLikes = firstComment.likes;
```

In this seemingly simple example, several things can go wrong, such as database connection issues, not finding the specific post, absence of any posts, or no comments or likes on the post. To ensure robustness, we need to handle exceptions and errors at each step.

### The Imperative Approach

To handle errors and exceptions, we often resort to nested if statements and try-catch blocks. However, this approach quickly becomes complex and hard to manage. Here's an example of the imperative approach to handle errors in the code:

```js
const postId = 34;
try {
    const postObject = repository.findOneById(34);
    if (postObject != null) {
        const postComments = postObject.comments;
        if (postComments.length > 0) {
            const firstComment = postComments.first();
            const numberOfLikes = firstComment.likes;
            if (numberOfLikes != null) return numberOfLikes;
            else 0;
        }
    }
} catch (e) {
    throw e;
}
```

As we can see, the code becomes convoluted and harder to follow as we add more steps that depend on previous ones. This mixing of implementation details with data operations leads to decreased code readability and maintainability.

### The Maybe Monad

To simplify the handling of complex data pipelines, we can utilize the Maybe monad. A monad is a design pattern that abstracts the pipeline implementation by wrapping a value with a specific type. In this case, we'll create a class called "Maybe" that encapsulates the value and provides a bind method for chaining operations.

Here's the definition of the Maybe class and its bind method:

```js
class Maybe {
    value;
    constructor(value) {
        this.value = value;
    }
    bind = function (func) {
        const newValue = func(this.value);
        // here we can decide to do anything with our data
        // we can implement all sorts of gaurds, exceptions handlers here
        return Maybe(newValue);
    };
}
```

### Refactoring with the Maybe Monad

Using the Maybe monad, we can rewrite the previous code in a more concise and readable manner:

```js
const postId = 34;
const numberOfLikes = Maybe(postId)
    .bind(repository.findOneById)
    .bind((post) => post.comments)
    .bind((comments) => comments.first())
    .bind((comment) => comment.likes);
```

By leveraging the bind method of the Maybe monad, we can chain the data operations while encapsulating error handling and exception management within the Maybe class itself. This abstraction allows us to focus on the core logic of the data pipeline, improving code readability and maintainability.

Monads, such as the Maybe monad, provide a design pattern that simplifies the handling of data pipelines by abstracting the implementation details and encapsulating values within a specific type. By separating the core logic from error.
