
function Search(props) {
return(
    <div className="search">
        <h1 id='search-title'>Search Employee</h1>
        <input type="text" value={props.search} name="search" onChange={props.handleInput}/>
        <button type='submit' onClick={props.handleSubmit}>Submit</button>
    </div>

)
};
export default Search