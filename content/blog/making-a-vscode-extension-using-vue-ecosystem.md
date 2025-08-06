+++
title = "making a vscode extension using vue ecosystem"
date = "2021-12-12T01:47:16+03:30"
summary = "Using vue 3, vite and TypeScript, we try to make a vscode extension"
tags = ["vue"]
show = true
+++

TLDR; [see the extension template repo](https://github.com/Mhdi-kr/vscode-webvue)

## Our First “Hello World” Extension
Let’s start with a simple extension that shows a message toast in the bottom right, shall we?

According to the VS Code official instructions, we first need to install the following two packages.

```bash
$ npm install -g yo generator-code
```
then, We need to run this command to scaffold our basic extension.

```bash
yo code
```

After completing required steps in the CLI, we have a base extension that we can tinker with.

In the `extension.ts` file generated we can see two callback functions:
```typescript
function activate() {
    ...
}

function deactivate() {
    ...
}

```

These functions are called in our extension’s lifecycle when starting and stopping.

To test and run our extension go ahead and press F5 on the keyboard (assuming you're using vscode, if you're not using vscode, why are u even reading this post? xD). This will open up a new VS Code instance called the “Development host” that has our extension loaded up locally.

In the `extension.ts` file we can see a key with which our extension is registered in the _Command palette_. That key also has to be registered in the `package.json` file in our extension root directory with a title.

In the extension host, open up _Command palette_ and type in the registered title to activate our extension.

```
command pallette shows:

> Hello world
```

press `enter` and now we should be able to see that information message we’re looking for!

now if we want to make any changes we just have to go back to our source code, apply our wanted changes and press f5 again to re-run the extension host!

## creating a WebView

VS Code is an Electron based application so it is technically like a browser that can render HTML or CSS and has the ability to run your own JavaScript.

To programmatically render all of your web files we need to make the following happen:

We add a function that returns a panel, for that panel we can set a html property which will be eventually rendered as a WebView in VS Code!


now by pressing f5 again we should call our new command in the Command palette using:

```
command pallette should show:

> Show Panel
```

and yeah this works! our html is now loaded and rendered like a browser INSIDE VS Code.

Ok, then now that we are able to import 3rd party CSS and JavaScript, all there’s to do is to have a Vuejs project built and then imported over to the VS Code extension context.

## Too much work? There's a template to this for you

[Enter VS Code WebVue](https://github.com/Mhdi-kr/vscode-webvue)

In the template we have two packages, our extension package and our Vue package.

In the vue package we have simple counter app we can open it up in the browser like all the other vue apps by running it in the development server

After making changes to in the vue package, Nodemon scans for file changes and build our vue app to files with specific names, then those files are imported using VS Code file resolution API and injected into our HTML template string.

The Nodemon also opens up an instance of VSCODE so we don't need to refresh manually. it also watches the extension’s source code as well restarting it if any changes are made, so this incredibly increases the ease of our DX.

Now lets run to see our vue extension in action!

```bash
yarn watch
```

An instance of development host opens up containing our web files and registered command!


```
in the command pallette:

> Hello world
```

Here you can see your vue project already built and injected using VSCode WebView API. you can utilize the full functionality of Vue js such as its amazing reactivity and its available plugins out of the box!


when you start developing on the /packages/client/ vue application directory, your changes will be watched using Nodemon, then rebuilt and be opened inside VS Code extension host ready to be used with VS Code Command palette!

Inside the vue application code, the vscode object is globally injected and can be used to send messages to the VS Code runtime and perform tasks such as read/writing files, etc.