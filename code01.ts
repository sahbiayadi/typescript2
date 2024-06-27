// Import React and types
import React from 'react';

// Define the type for props
interface GreetingProps {
    name: string;
}

// Define the functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div> Hello, {name} !</div>;
};

export default Greeting;