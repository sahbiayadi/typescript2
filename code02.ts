// Import React and Component type
import React, { Component } from 'react';

// Define the type for state
interface CounterState {
    count: number;
}

// Define the class component with typed state
class Counter extends Component<{}, CounterState> {
    // Initialize state with type annotation
    state: CounterState = {
        count: 0
    };

    // Method to increment the count
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Render method with type annotations
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
