---
title: "[unfinished] Refactoring to Functional paradigm"
date: "2022/02/02"
excerpt: "Dotchaining the non-dotchainable in Node JS"
tags: "Tutorial,Javascript"
show: true
---
### What we already know about developing applications

we start with names, key-value pairs, ifs and elses, iteration and procedures.
on top of all this we have atomic data types in every single programming languages such as strings, numbers and booleans.
we can go even higher than that to reach arrays, hashes and namespaces.
object oriented programming brings other abstractions such as classes, objects with methods and inheritance.
A mixture of all these entities make up our _programs_

### A reason to refactor

functional programming is refactoring what you already know about wiritng applications
At the start applications are written neatly but as the time goes on and we keep adding features and dependancies to our apps, it becomes a mess

### Mathematicions have the same problems as we do

In my opinion, computer science is a subset of mathematics. They faced the very problems we have with writing our applications and came up with _principia mathematica_ to try to explain maths in atomic levels of abstraction

In mathematics, a function is a relation between two sets, a mapping from one to another.

what we do is not the same as functions, we return numbers, or void or IO or database or HTTP request

what if applied some rules to our programming to make it look like maths?

-   Look at inoput and parameteres, generate output
-   no side effects

in hope of making programs easier to understand and easier to maintain
fx wont affect x

make datastructures immutable
dont change things
how can we be productive? make a copy of any ds you want to mutate.
there's a problem. a lot of copies. what if you have a milion element array?

### lets start with a clean sheet of paper

### side effects

customers and business care about the side effecst! actyally desired effects!
how to change outside world with functional limitations?
there should a some kind of a queue that has messy appearance that our functions inqueue stuff in it and some parts of our code grabas stuff from it and executes it

### Functional refactoring in action

Here's what we want to achieve. we first need to read the text content of a `.svg` file, then we need to pipe the content through a package called `svgo`. It optimizes SVG string and removes unneeded content without affecting the actual vectors. Then we need to make a `.vue` single file component and write the content we have in it.

```javascript
// optimizer.js
const fs = require("fs");
const { optimize } = require("svgo");

const optimizer = (arg) => ({
    import: () => optimizer(readFiles(arg)),
    optimize: () => optimizer(optimizeItems(arg)),
    export: () => writeComponents(arg),
});

const readFiles = (paths) =>
    paths.map((filePath) => ({
        path: filePath,
        content: fs.readFileSync(filePath, "utf8"),
    }));

const optimizeItems = (contents) => contents.map(optimize);

const writeComponents = (items) => {
    items.forEach((item) =>
        fs.writeFileSync(component.path, component.content)
    );
}

optimizer(["foo.svg", "bar.svg"]).import().optimize().export();
```

notice we are only declaring seperated functions with predictible actions without any mutiation to any variable
three main functions to do certain tasks. then aggregate these functions in `optimizer` factory function to be able to do dot chaining with the results

you can write individual tests for each function and increse the coverage
