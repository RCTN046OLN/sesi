import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, "error");
    console.log(info, "info");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ada error di aplikasi</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
