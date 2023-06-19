import "../App.css"
import Comments from "./Comments";

const PostContent = ({ selectedPost }) => {

    // onClick eventi ile dinlenen propslar title ve body olarak gösterildi.

    return (
        <div className="content-container">
            {selectedPost && (
                <div>
                    <h2>{selectedPost.title}</h2>
                    <p>{selectedPost.body}</p>
                    <Comments postId={selectedPost.id} />
                </div>
            )}
        </div>
    );
};

export default PostContent