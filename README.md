# Sesi 7

Materials:

- [Component Lifecycle](#component-lifecycle)
  - [Mounting](#mounting)
  - [Updating](#updating)
  - [Unmounting](#unmounting)
  - [Error Handler](#error-handler)
- [Fetch Data](#fetch-data)

---

## Component Lifecycle

- https://reactjs.org/docs/react-component.html

### Mounting

- constructor()
- render()
- componentDIdMount()

&nbsp;

### Updating

- componentWillReceiveProps(nextProps)
- shouldComponentUpdate(nextProps, nextState)
- componentWillUpdate(nextProps, nextState)
- componentDidUpdate(prevProps, prevState)

&nbsp;

### Unmounting

- componentWillUnmount()

&nbsp;

### Error Handler

- componentDidCatch(error, info)
  - https://reactjs.org/docs/react-component.html#componentdidcatch

&nbsp;

## Fetch Data

- axios
  - https://www.npmjs.com/package/axios
- fetch
  - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
