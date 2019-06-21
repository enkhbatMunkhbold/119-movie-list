import App from "./app.js";

var movies = [
    {id: 0, title: 'Mean Girls'},
    {id: 1, title: 'Hackers'},
    {id: 2, title: 'The Grey'},
    {id: 3, title: 'Blah'},
    {id: 4, title: 'Ex Machine'}
]

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));