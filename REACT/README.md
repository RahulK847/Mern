# React Learning Projects

This repository contains various React projects created during my learning journey.

## Projects

### 1. Counter App (02counter)

A simple counter application demonstrating different state update patterns in React.

## Key React Concepts

### State Management

#### Different Ways to Update State

1. **Direct Value Update**: `setState(newValue)`

   ```jsx
   const [count, setCount] = useState(0);
   setCount(count + 1);
   ```

2. **Functional Update**: `setState(prevState => newValue)`

   ```jsx
   const [count, setCount] = useState(0);
   setCount((prevCount) => prevCount + 1);
   ```

   **Key Difference**: The functional update guarantees you're working with the latest state value, which is crucial when:

   - Making multiple state updates in the same function
   - Working with asynchronous code
   - Handling events that might be batched by React

#### Example to Illustrate the Difference

```jsx
// Using direct value update
function handleMultipleClicks() {
  setCount(count + 1); // count = 0 → 1
  setCount(count + 1); // count is still 0 in this scope → 1 again
  setCount(count + 1); // count is still 0 in this scope → 1 again
  // Result: count becomes 1, not 3
}

// Using functional update
function handleMultipleClicks() {
  setCount((prevCount) => prevCount + 1); // 0 → 1
  setCount((prevCount) => prevCount + 1); // 1 → 2
  setCount((prevCount) => prevCount + 1); // 2 → 3
  // Result: count becomes 3
}
```

### Component Lifecycle

- **Mounting**: Component is being added to the DOM
- **Updating**: Component is being re-rendered due to changes in props or state
- **Unmounting**: Component is being removed from the DOM

### Essential Hooks

- **useState**: Manage state in functional components
- **useEffect**: Handle side effects (API calls, subscriptions, DOM manipulations)
- **useContext**: Access context values without prop drilling
- **useRef**: Create mutable references that persist across renders
- **useMemo**: Memoize expensive calculations
- **useCallback**: Memoize functions to prevent unnecessary re-renders

## React Fiber Architecture

### Introduction

React Fiber is a reimplementation of React's core algorithm, designed to improve rendering performance, particularly for animations, layout, and gestures. The key feature is incremental rendering, allowing React to split rendering work into chunks and prioritize updates efficiently.

### Key Features

- **Incremental rendering**: Work is split across multiple frames.
- **Priority-based updates**: Urgent updates (e.g., animations) are processed first.
- **Pause, abort, and reuse work**: Allows React to optimize performance dynamically.
- **Concurrency primitives**: Enables concurrent rendering and background updates.

### Reconciliation

Reconciliation is the algorithm React uses to diff one tree with another to determine which parts need to be changed.

#### Update

An update is a change in the data used to render a React app, usually resulting from `setState`. This eventually leads to a re-render.

The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows developers to reason declaratively rather than worry about efficiently transitioning the app from one state to another (e.g., A to B, B to C, C to A).

Actually re-rendering the entire app on each change is only feasible for trivial apps; in real-world applications, it is too costly in terms of performance. React optimizes rendering to create the appearance of a full re-render while maintaining high performance. These optimizations are primarily part of a process called **reconciliation**.

### Scheduling & Performance

- React prioritizes UI updates based on importance.
- Background updates (e.g., data fetching) are deferred.
- `requestIdleCallback` & `requestAnimationFrame` help optimize performance.

### What is a Fiber?

A fiber represents a unit of work, like a virtual stack frame for rendering. It enables:

- Pausing & resuming work to prevent UI blocking.
- Scheduling updates based on priority.
- Reusing completed work for efficiency.

### Fiber Structure

Each Fiber node is an object with key properties:

- **type & key**: Identifies the component.
- **child & sibling**: Defines the component tree.
- **return**: Points to the parent fiber.
- **pendingProps & memoizedProps**: Tracks new vs. previous props.
- **pendingWorkPriority**: Determines update priority.

### Conclusion

React Fiber makes rendering more efficient by breaking work into smaller, manageable units and scheduling updates intelligently. This improves performance, responsiveness, and paves the way for concurrent rendering.

## Development Environment

### React + Vite

Many projects in this repository use Vite as the build tool:

- Fast development server with Hot Module Replacement (HMR)
- Optimized production builds
- Plugin-based architecture

Available plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Useful Resources

- [React Documentation](https://react.dev/)
- [React Hooks API Reference](https://react.dev/reference/react) [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
