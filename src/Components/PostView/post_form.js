import Header from "./header";
import "../styles/post_form.css"

const PostForm = () => {
  return (
    <>
    <Header/>
      <section className="post-form">
        <div>
          <form>
            <div>
              <input type="file" id="myFile" accept="image/*"/>
            </div>
            <div>
              <div className="A-L">
                <input type="text" id="author" placeholder="Author" />
              </div>
              <div className="A-L">
                <input type="text" id="location" placeholder="Location" />
              </div>
            </div>
            <div>
              <input type="text" id="description" placeholder="Description" />
            </div>
            <input type="submit" id="post-btn" value="Post" />
          </form>
        </div>
      </section>
    </>
  )
}

export default PostForm;