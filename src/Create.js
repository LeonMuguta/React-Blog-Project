import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        setIsLoading(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added!");
            setIsLoading(false);
            history.push("/");
        });

        
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog title</label>
                <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog body</label>
                <textarea value={ body } onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Blog author</label>
                <input type="text" value={ author } onChange={(e) => setAuthor(e.target.value)} required/>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;