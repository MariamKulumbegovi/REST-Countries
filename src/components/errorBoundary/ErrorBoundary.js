import React from 'react';
import '../../App.css';

export default class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };
  componentDidCatch(error) {
    this.setState({
      error,
    });
  }
  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="container box mt-10">
          <div className="  is-flex-direction-column is-align-content-baseline	">
            <h2 className="red">Something went wrong...</h2>
            <p className="red">{error.toString()}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
