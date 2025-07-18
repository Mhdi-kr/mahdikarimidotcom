+++
title = "pieces of advice for my junior developer self"
date = "2021-10-02T01:47:16+03:30"
summary = "The most important tips I would give myself to become a better developer"
tags = ["life"]
show = true
+++

When I joined the Alibaba Travels company, I was tasked to maintain and migrate the hotel CRS (Central Reservation System) panel. It was developed using Vue.js 2.6, webpack, bootstrap-vue UI component library. There used to be a lot of technical debts and anti-patterns such as prop-drilling and excess use of mixins, etc. We were in dire need of a big change.

There were a lot of ups and downs, but after 3 to 4 months I was able to replace Vue 2 with Vue 3, Webpack with Vite, configured cypress and testing environments, resolved breaking changes and last but not least, migrate ALL of the used SFC (single file components) to use a totally different UI component library with different props, design and behavior!

All of the said changes were committed to the same git repository but in a different branch! Just like natural selection, I knew we could not afford to redo things from scratch. This is how we get to my first point here.

### Prefer changing existing code to redoing everything from scratch

There were a lot of pieces of code that I could reuse in the migration without any problems such as the custom date and currency plugins and utils, backend API integration sdks, reusable general components that existed in the codebase, etc.

I tried to do as little change as possible in terms of removing whole code sections or components and rewriting them, but I have to admit, sometimes you just cannot do it.

I tried to rewrite one of our views about supplier CRUD actions from scratch, my estimated time for the task was one week. It took two to finish while fixing a lot of unpredicted bugs in the meantime. I learned something important, when migrating code especially if the requirements are the same as before and there’s nothing to drastically change, improve upon code that already exists. the heavy lifting is already done. you can deliver faster with higher quality that isn’t rushed.

### Premature optimization is the root of all evil

Always implement things when you need them and never when you foresee that you might need them.

Premature optimization means postponing delivery in favor of making the perfect architecture which to some extent, is a fairy tale.

Passionate developers tend to over-engineer their design and architecture. We crave optimizations in our designs and developments. These actions seem so exciting to us and we spend so much time on them that we forget about the product itself. Our number one goal should be to deliver value to the business.

Over-engineering could be a great way to learn new things. However, the question is whether production code is the right place for experimenting or not.

I learned that perfect code is not written overnight. it’s not a linear path to perfection. The nature of software development is of an onion. You have layers upon layers of iteration over the same thing to make it better every day. Like a painter that brushes over the same canvas over and over again that it becomes Starry night.

### Beware of abstractions

> “Duplicate code is cheaper than the wrong abstraction”

Abstractions are great because right ones simplify things in the long run, But if you try to abstract everything, you’re gonna lose your flexibility in adding features.

Make sure you have developer’s experience (DX) in mind whenever you want to add some sort of abstraction or automation to your codebase.


### Know your environment's limitations

As a general rule of thumb, it is great practice to know the pitfalls and problems you’re likely to have using your language or framework of choice.

For vue.js or any other framework/library that uses declarative programming and has tight coupling with states, it is so important to be able to keep track of state and side effects.

Declarative programming without a good side-effect management is just imperative programming with more steps.

### Embrace humility

At the time of migration, I did not know the answer to a lot of my questions. I learned to constantly ask other teams about solutions and suggestions, alongside my own research.

Don’t be afraid to ask questions, You can’t know it all. You have to decide how much of a generalist you want to be, and how much of a specialist you want to be.

### Gain domain knowledge as soon as possible

Without domain knowledge, you will not be using 100% of your technical skills. No matter how good you are in your tech stack, you need domain knowledge to use it.

Domain knowledge lets you foresee problems that haven’t occurred yet and avoid them beforehand, whether it is the implementation of complex UIs or the architecture design of a MongoDB schema.

Take time to know the business, ask questions, set meetings. remember you’re only here to support your business.

### Get in touch with users, directly or indirectly

It always feels good when your direct users thank you for your app’s features, and it is eye-opening to see how exactly they interact with it and what they expect from it.

The best-case scenario is where a developer can afford regular meetings with users and stakeholders and collect a list of to-dos that will be added in near future.

Connecting with users can create a positive feedback loop that will benefit both you and them.

### Automate what you can especially mundane and repetitive tasks

There are a number of repeatable tasks we do every that can be automated and drastically speed up our process.

One example of automation in my workload was an optimization pipeline for our SVG components. I developed a little script that I run to generate Optimized SFC Vue components from SVG files to lazy load them where I need them. here's the node program for it:

```javascript
// optimizer.js
const fs = require("fs");
const { optimize } = require("svgo");

const optimizer = (arg) => ({
    import = () => optimizer(readFiles(arg)),
    optimize = () => optimizer(optimizeItems(arg)),
    export = () => writeComponents(arg),
});

const readFiles = (paths) =>
    paths.map((filePath) => ({
        path = filePath,
        content = fs.readFileSync(filePath, "utf8"),
    }));

const optimizeItems = (contents) => contents.map(optimize);

const writeComponents = (items) => {
    items.forEach((item) =>
        fs.writeFileSync(component.path, component.content)
    );
}

optimizer(["foo.svg", "bar.svg"]).import().optimize().export();
```

Get to know the automation tricks your IDE of choice will provide you. This will drastically increase your workflows speed as the time moves on.
Learn to use regex, it can help you find patterns in your codebase saving you hours of manual searching in large code bases. If you use vim, create macros for your most frequent actions.

### Start small and be consistent

Working on large software applications is daunting. Chopping up big tasks into smaller, doable sub-tasks and focus on them one at a time until there’s no subtask is left. This method was famously used by Napoleon called "divide and conquer" and it just works.

you can eat an elephant one peace at a time, lay the bricks until the wall is done. fast iteration, fast correction, fast delivery will get you through hell.

### Beware of burnout

I am passionate about my profession. I don’t feel time passing by when I’m working, but, everyone has a limited amount of energy and mental capacity each and every day and this is just a fact.

Just take breaks to sharpen your axe. Make sure you have enough physical resources, food and sleep to keep you going.

Take a great care of yourself and health, because it is priceless.

### Take responsibility and bury your burden

Get to work. stop blaming legacy code, previous developers, or decisions made before you. It is all gone and past. You’re the player now, you’re the one everyone will blame or praise afterwards. The choice is only yours.