# react-resize-example

This is an example to illustrate how you can use the `ref` feature in React to read the DOM node dimensions after a component renders (width in this example). 

The goal is to have a component called `MyComponent` print out its own width when it renders.

As the MyComponent initially renders, a component property `this.element` will be set using the `ref` feature, but this does not trigger any of the React component lifecycle methods since neither props nor state is changed. The `componentDidMount` lifecycle method does trigger after the initial render as normal though, and at this point the component property `this.element` is set so we can use this method to update to the component state `offsetWidth` value, thus triggering a re-render.

Additionally, we trigger the `updateWidth` method if the window resize event is triggered to keep the `MyComponent` output up to date.

## Install

```
$ yarn

OR

$ npm install
```

### Start development server
```
$ yarn dev

OR

$ npm run dev
```
Open http://localhost:8080
