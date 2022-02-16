import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {data && <BlogList blogs={data} />}
        </div>
    );
}

// JSON Server command - npx json-server --watch data/db.json --port 8000
 
export default Home;