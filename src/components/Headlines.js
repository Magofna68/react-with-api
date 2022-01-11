import React from 'react';

class Headlines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            //  The initial state of isLoaded is false. 
            // Our component will mount before we make an API call. 
            // We'll put the code for the API call in the componentDidMount
            //  lifecycle method so it runs as soon as our component is mounted. 
            // Once the call is complete, isLoaded will be switched to true
            headlines: []
            // headlines is an empty array. 
            // It will contain the NYT headlines in JSON format.

        };
    }

    makeApiCall = () => {
        
            // We use the built-in fetch() method (JavaScript, not React) to make our API call. 
            // The URL for the API call is in backticks so that we can use a template string for 
            // our API key, which is stored in an environmental variable.

            fetch(`https:/api.nytimes.com/svc/topstories/v2/home.json?api-key=$process.env.REACT_APP_API_KEY}`)
            
            // Once the API call is complete, the response will be converted to JSON. 
            // Then, once it's been converted, we'll have our results.
            
            .then(response => response.json())
            .then(
                (jsonifiedResponse) => {
                    this.setState({
                        isLoaded: true,
                        headlines: jsonifiedResponse.results
                        
                        // the headlines are stored in a property of the response called results, 
                        // we update the headlines state to be jsonifiedResponse.results
                        
                    });
                })
                .catch((error) => {
                    this.setState({
                        isLoaded: true,
                        error
                        // Otherwise, we set isLoaded to true and set the error property
                        //  to the error that the API call returns
                    });
                });
            }
            
            compoenentDidMount() {
                this.makeApiCall()
            }
            
            render() {
                // start by deconstructing this.state to extract each of its properties.
                const {error, isLoaded, headlines } = this.state;

                // If there's an error, we'll return an error message.
                if(error) {
                    return <>Error: {error.message}</>;
                // if isLoaded is false, we are in the process of loading 
                // hence render Loading...
                } else if (!isLoaded) {
                    return <>Loading...</>;
                } else {
                // otherwise, we'll return the headlines in an unordered list
                // with the title and the body using the key as the index
                    return (
                        <>
                    <h1> Headlines </h1>
                    <ul>
                        {headlines.map((headline, index) =>
                            <li key={index}>
                                <h3>{headline.title}</h3>
                                <p>{headline.abstract}</p>
                            </li>
                        )}
                    </ul>
                    </>
                );
            }
        }
        
};


export default Headlines;