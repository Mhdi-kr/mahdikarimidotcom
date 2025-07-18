+++
title = "philosophy of software design in vue.js applications"
date = "2022-08-08T01:47:16+03:30"
summary = "Understanding complexity, its symptoms and causes related to Vue.js applications"
tags = ["life","frontend","vue"]
show = true
+++

Recently I finished reading a great book called “A Philosophy of Software Design” written by John Ousterhout. In this article, I am going to distill everything I’ve learned throughout my journey and try to apply them to Vue.js ecosystem.

### Complexity
In the first and second sections, the book teaches us to fight complexity in our systems, we must take two important actions:

Eliminate complexity by writing shorter and more obvious code
Encapsulate complexity in components (or modules) so that other developers working on the project are not exposed to it all at once
These points may seem obvious or trivial at first, but personally I've seen engineers with all levels of expertise make the same mistakes over and over again (including myself!).

So to tackle this problem we should first learn the definition, symptoms and the possible causes of complexity.

### Definition
“Complexity is anything related to the structure of a software system that makes it harder to understand or modify.”

### Symptoms
Complexity in software systems has 3 major symptoms:

#### Change amplification
“Change amplification means a seemingly simple change requires code modifications in many different places.”

Meaning there are a lot of couplings in our system which breeds complexity.

#### Cognitive load
“Cognitive load is measured by how much a developer needs to know in order to complete a task.”

#### Unknown unknowns
“it’s not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully.”

Causes
Now, what can actually cause those symptoms in our software systems? two major factors are to consider:

Dependency
A dependency exists when a given piece of code cannot be understood and modified in isolation. The code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed.

Obscurity
Obscurity occurs when important information is not obvious.

In JavaScript/TypeScript projects, non-existing JSDoc or using the “any” type all over the place are two examples of obscurity.

Have you ever been in a situation when you were forced to read the low level implementation of a component just to know what props to pass to it or how something is handled inside? you’ve just experienced obscurity.

Working Code is !enough
There are 10 types of developers in this world. The ones who can read binary and the ones who can’t. Just kidding 😄.

There are two types of developers, Tactical and strategic.

Tactical
Tactical programmers’ focus is to get something working as fast as possible, such as a new feature or a bug fix. The product managers and executives love them but this is exactly how systems eventually become complicated.

Tactical developers’ mindset is the main cultural factor that brings about “Technical debt” in most cases.

Strategic
Strategic programmers realize that working code is not enough.

Most of the code in any system is written by extending the existing codebase, so your most important job as a developer is to facilitate those future extensions.

Strategic programmers do proactive or reactive investments. such as:

Find a simple design for each new component
Try a couple of alternative designs and pick the cleanest one
Try to imagine a few ways in which the system might need to be changed in the future and make sure that will be easy with your design
Write a good documentation
When you discover a design problem, don’t just ignore it or patch around it
We should strive to be a little more strategic and a little less tactical in our careers.

Module depth
Each module or component has two parts = an interface and an implementation.

The best modules are the ones whose interfaces are much simpler than their implementations.


This is exactly where “breaking code to smaller parts” can actually make our architecture worse, because the benefits provided by shallow modules are negated by the cost of learning and using their interfaces.

Interfaces should be designed to make usage of the common case as simple as possible (KISS).

Hiding information, or leaking it!
Each component should encapsulate a few pieces of knowledge, which represent design decisions. The knowledge is embedded in the component’s implementation but does not appear on its interface, so it is not visible to other modules.

Information leakage occurs when a design decision is reflected in multiple components. This creates a dependency between the components. Also, if a piece of information is reflected in the interface for a component, then by definition it has been leaked.


JSON interface does not tell us how it does parsing or stringifying. It hides that knowledge and just does it for us.

Different Layer, Different Abstraction
If a system consists of adjacent layers with similar abstractions, this suggests a problem with the class decomposition.

Pass-through variables
Imagine you have a long chain of methods and a variable is passing down through it. This variable creates complexity because it forces all the links in that chain to be aware of its existence, even if one of them doesn’t use it.

Even worse, let’s say you want to modify the implementation or type of that variable, You need to change all those methods which that variable is passed to (change amplification) or if a new variable comes into play you have to make sure the path that variable traverses is correct and expected.

An example of pass-through variables in Vue.js is props usage.


A quick example of prop drilling in a hypothetical to-do list application
In the example above, we are passing a dynamic URL that we need to post a payload to whenever we check something in our to-do list. Let’s suppose we only have access to that URL in the root index.vue file so we can’t just hardcode that in the TaskItem.vue file so we are forced to pass it down the component tree like that.

Now imagine if requirements change, in that case we need to change 3 places to accomplish one thing!

Pass-through functions
Methods that do little except invoke other methods, whose signatures are similar or identical, are shallower as they increase the interface complexity of the class, but they don’t increase the total functionality of the system. They indicate that there is confusion over the division of responsibility between classes/components.

Interface of a class should normally be different from its implementation = the representations used internally should be different from the abstractions that appear in the interface.

Better Together Or Better Apart
One of the most fundamental questions in software design = given two pieces of functionality, should they be implemented together in the same place, or should their implementations be separated?

Subdividing components can result in:

The more the number of components is, the harder it is to keep track of them all (more hassle because of more moving pieces)
Additional code to manage the components
Separation makes it harder to see the components at the same time, or even be aware of their existence (increasing unknown unknowns).
Code duplication
A few indications that two pieces of code are related are:

They share information
They are used together (only compelling if bidirectional)
They overlap conceptually
It’s hard to understand one of the pieces of code without looking at the other.
We should:

Bring together if information is shared.
Bring together if it will simplify the interface.
Bring together to eliminate duplication.
Separate general-purpose and special-purpose code. Failing to do so is usually a red flag.
In Vue 3, there’s this concept of composition API that we can use to easily use other Vue primitives that we already know and love such as computed properties, refs and reactives, watchers and lifecycle hooks in one place and use it everywhere we like.


useTodos.ts composable gathering all logic in one place
What we did here is that we gathered the logic and state spreading through 3 different components in one single file. we can import this file and use what it returns like any other module and even if requirements change in the future, we only need to change one file!

Pull Complexity Downwards

It’s more important for a module to have a simple interface than a simple implementation (as also said above).

We should try to do complicated tasks in the inner layers and do more general things in the outer layers. This reduces cognitive load for others because we are creating modules with more functionality and simpler interfaces which is the textbook definition of “deeper modules”.

Define Errors Out Of Existence
The exceptions thrown by a class are part of its interface. Classes with lots of exceptions have complex interfaces, and they are shallower than classes with fewer exceptions.

Exception handling is one of the worse sources of complexity in software systems.

Exception handling code is inherently more difficult to write than normal-case code. Furthermore, it creates opportunities for more exceptions.
It’s difficult to ensure that exception handling code really works. Some exceptions can’t easily be generated in a test environment.
Code that hasn’t been executed doesn’t work.

The best way to eliminate exception handling complexity is to define your APIs so that there are no exceptions to handle.

Exception masking
Reduce the number of places where exceptions must be handled.

Exception aggregation
Handle many exceptions with a single piece of code. Exception aggregation works best if an exception propagates several levels up the stack before it is handled. This allows more exceptions from more methods to be handled in the same place.

This is the opposite of exception masking, masking usually works best if an exception is handled in a low-level method. For masking, the low-level method is typically a library method used by many other methods, so allowing the exception to propagate would increase the number of places where it is handled.

Masking and aggregation are similar in that both approaches position an exception handler where it can catch the most exceptions, eliminating many handlers that would otherwise need to be created.

Just crash when it makes sense to do so. By the same token, it also makes sense to define other special cases out of existence.

Design it Twice
Designing software is hard, so it’s unlikely that your first thoughts about how to structure a module or system will produce the best design. You’ll end up with a much better result if you consider multiple options for each major design decision.

Writing better comments
There are a lot of excuses for not commenting in any code base such as:

Good code is self-documenting.
I don’t have time to write comments.
Comments get out of date and become misleading.
The comments I have seen are all worthless. Why bother?
All of these excuses are debunked in the book.

Good documentation helps with two of three ways in which complexity manifests itself in software systems = cognitive load and unknown unknowns.

Comments should decrease obscurity
Consider the following points:

Decide on conventions for commenting.
Don’t repeat the code. Comments at the same level of details as the code is not useful and a red flag. Ask yourself a question “could someone who has never seen the code write the comment just by looking at the code next to the comment?”. If the answer is yes, the comment is not useful.
Comments augment the code by providing information at a different level of detail, low-level comments add precision, high-level comments offer intuition.
If interface comments must also describe the implementation, then the class/method is shallow.
Delayed comments are bad comments, write the comments first.
Comments are a design tool. Comments serve as a canary in the coal mine of complexity. If a method or variable requires a long comment, it is a red flag that you don’t have a good abstraction.
Early comments are fun comments, Early comments are not really too expensive.
Choosing Names
Good names are a form of documentation/abstraction. Good names have two properties, precision and consistency.

Consistency
Always use the common name for the given purpose. Never use the common name for anything other than the given purpose. Make sure that the purpose is narrow enough that all variables with the name have the same behavior.

The greater the distance between a name’s declaration and its uses, the longer the name should be.

Precision
Vague names are a red flag. It’s fine to use generic names like i and j in a loop. But if the loop gets so long that you can't see it all at once, then a more descriptive name is in order. Also avoid names that are too specific. - If you find it difficult to come up with a name for a particular variable that is precise, intuitive, and not too long, it suggests that the variable may not have a clear definition or purpose.

Consistency
Consistency creates cognitive leverage, once you have learned how something is done in one place, you can use that knowledge to immediately understand other places that use the same approach. Examples include names, coding style, interfaces, design pattern, and invariants.

Document the most important overall conventions. Enforce conventions with automated tools (like ESLint) to check for violations.

Don’t change existing conventions. Having a “better idea” is not a sufficient excuse to introduce inconsistencies. The value of consistency over inconsistency is almost always greater than the value of one approach over another.

Like the saying goes:

When in Rome, do as the Romans do.

Code Should Be Obvious
Software should be designed for ease of reading, not ease of writing.

Things that make code more obvious:

Choosing good names (as mentioned above)
Consistency (as mentioned above)
General-purpose techniques such as white space or comments.
Things that make code less obvious:

Event-driven programming
Generic containers
Different types for declaration and allocation
Code that violates reader expectations
One of the bad practices in Vue is handling business logic and state mutation in watchers. Watchers or watchEffect should be implemented in a “fire and forget” manner. Also using provide and inject can potentially be not obvious. use these tools wisely.

We’ve covered key concepts discussed in the book. now as a bonus let’s see how SOLID principles relate to our readings above!

SOLID Vue
1. S for “Single-responsibility principle”
The idea behind the SRP is that every class, component, module or function in a program should only have one responsibility. As a commonly used definition we can say = “every component should have only one reason to change”.

Your components need to do one thing and if you want multiple thing happens you should compose them so that a reader understands “oh this a component that gathers 3 other components that only do one thing, so it should only be able to do 3 things!”

Be cautious if you have a component that imperatively does a lot of different things at once.

A great example of SRP is tailwind CSS, A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

Great thing about tailwind that everyone loves is that it is consistent and composable so you can throw as many classes to a div as you’d like and be sure that the end result will be a combination of the classes and non of these classes are implicitly overriding each other’s styles.

2. O for “Open–closed principle”
The open-closed principle states that software entities should be open for extension, but closed for modification.

Slots are great examples of how we can Facilitate extensions in Vue. Slots will help us extend our components with any template we want and in the same time keeping our state inside!


In computer programming, as soon as you introduce a “state” you are responsible for its existence and side effects. Always ask yourself “what changes my states?”. Always have a “state machine” in your mind that handles every expected behavior or unexpected errors. This is how we can make sure we are closed for modification.

3. L for “Liskov substitution principle”
Personally I don’t think we get to see a lot of LSP in the Vue ecosystem because I assume there aren’t a lot of companies or teams that are using class components, but anyways, here’s the description!

The “Liskov substitution principle” simply implies that when an instance of a class/component is passed or extended to another class/component, the inheriting class should have a use case for all the properties and behavior of the inherited class.

4. I for “Interface segregation principle”
The interface segregation principle states that the interface of a program should be split in a way that the user/client would only have access to the necessary methods related to their needs.

This is kind of related to the first principle (SRP) and this is closely related to deep modules concept discussed at in first sections of this article. It is important when designing prop interfaces and how components interact with each other.

5. D for “Dependency inversion”
High-level modules should not import anything from low-level modules. Both should depend on abstractions.

Let me show you an example in Vue = loose coupling between backend APIs and component props.


Never let your backend API properties define your components’ props, instead conclude an interface that satisfies both APIs, UI and application requirements simultaneously, then use a map function to transform the API data so that in complies to the interface.

This way if API or requirements change, you only alter the mapping implementation and all the component tree will be untouched!

This method of thinking is inconvenient and takes more time to develop at first but this is an investment for future changes.

At last we should consider not obsessing about all the rules said above. There are technical debts to overcome deadlines etc. but we should strive for fundamentals and learning them because we will subconsciously be better programmers in the end.