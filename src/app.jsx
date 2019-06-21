/*
--add a search bar  ( and  button)
  --figure out input text field 
  --add some way to handle click events
    (<button onClick={()=> console.log('Enkhbat')}>Search</button>)
--add functionality to handle search
*/
console.log('testing! 12345');
var movies = [
    {id: 0, title: 'Mean Girls'},
    {id: 1, title: 'Hackers'},
    {id: 2, title: 'The Grey'},
    {id: 3, title: 'Blah'},
    {id: 4, title: 'Ex Machine'}
]

console.log(movies);
const App = () => (
<div>
<h1>Movie List</h1>
    <input type="text" />
    <button onClick={()=> console.log('Enkhbat')}>Search</button>
    <ul>
        {movies.map(movie => <li key={movie.id }>{movie.title} </li>)}
    </ul> 
</div>)
export default App;