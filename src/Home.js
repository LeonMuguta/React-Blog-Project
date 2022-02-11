const Home = () => {

    const handleClicK = (event) => {
        console.log("Hello!", event);
    }

    const handleClickAgain = (name) => {
        console.log(name);
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClicK}>Click Me!</button>
            <button onClick={() => handleClickAgain("Leon")}>Click me again!</button>
        </div>
    );
}
 
export default Home;