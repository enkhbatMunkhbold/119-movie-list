/*
--add a search bar  ( and  button)
  --figure out input text field 
  --add some way to handle click events
    (<button onClick={()=> console.log('Enkhbat')}>Search</button>)
  --setup "Controlled Component"
    --store the text value for the input in React state
    --when new input is entered, first change it in the React state,
    --when input text changes update the state
      then render the component based off that React state.

--add functionality to handle search
    -- on search click
    -- compare input text to titles, 
    -- filter for movies whose title contains the input text
    -- render our newly filtered list


    -- new function (pass it the data)
    -- filter the data, 
    -- when you click "search" filter the 
    -- add a thinkg to the state for the list of movies being rendered.
*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputText: ''};
        this.handleChange = this.handleChange.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }
    
    handleChange(e) {
        const inputText = e.target.value
        this.setState({inputText});
    }

    searchHandler() {
        const movies = this.props.movies;
        const input = this.state.inputText;
        const filteredMovies =  movies.filter(movie => movie.title.includes(input));
        console.log(filteredMovies);
    }
    
    render () {
        const iput = this.state.inputText;
        const movies = this.state.inputText ? this.props.movies.filter(movie => movie.title.includes(iput)) : this.props.movies;
        return (
            <div>
            <h1>Movie List</h1>
                <input value={this.state.inputText} onChange={this.handleChange}type="text" />
                <button onClick={this.searchHandler}>Search</button>
                <ul>
                    {this.props.movies.map(movie => <li key={movie.id }>{movie.title} </li>)}
                </ul> 
            </div>
        );
    }
}

export default App;