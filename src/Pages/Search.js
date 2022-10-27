

function Search(props){

    let active = props.activepage;
    let back = props.handlePage;

    return <>
    
    {(active=="search"?
    <div className="page search">
        <div className="p-4">
        <h2>Search by Title</h2> 
        <a href="#" onClick={()=>back("home")}>Back</a>
        <hr />
        </div>
    </div>
     : <></>)}

    </>
}
export default Search;