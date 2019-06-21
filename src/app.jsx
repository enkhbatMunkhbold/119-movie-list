/*
--add a search bar  ( and  button)
  --figure out input text field 
  --add some way to handle click events
    (<button onClick={()=> console.log('Enkhbat')}>Search</button>)
  --setup "Controlled Component"
    --store the text value for the input in React state
    --when new input is entered, first change it in the React state,
      then render the component based off that React state.
--add functionality to handle search
*/

class App extends React.Component {
    render () {
        return (
            <div>
            <h1>Movie List</h1>
                <input type="text" />
                <button onClick={()=> console.log('Enkhbat')}>Search</button>
                <ul>
                    {this.props.movies.map(movie => <li key={movie.id }>{movie.title} </li>)}
                </ul> 
            </div>
        );
    }
}

export default App;