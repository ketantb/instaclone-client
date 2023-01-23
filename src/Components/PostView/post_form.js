import Header from "./header";
import "../styles/post_form.css"
import { useState } from "react";
// import { data } from "./data";
import { nanoid } from "nanoid";
import moment from "moment/moment";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PostForm = () => {
  const [formData, setFormData] = useState({author: "", location: "", description: ""})
  const handleChange = (params) => (e) => {
    setFormData({...formData, [params]: e.target.value})
  }

const yes = formData.author.length && formData.location.length && formData.description.length

console.log(yes)

const fieldsAreMandatory = () => toast.warn("Author, Location & Description are mandatory Fields",{
position: toast.POSITION.TOP_CENTER
});

const postData = async(e) => {
  e.preventDefault()
  let trimName = formData.author
  .split(' ')
  .filter((i) => i !== '')
  .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
  .join(' ');
  let trimLocation = formData.location
  .split(' ')
  .filter((i) => i !== '')
  .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
  .join(' ')
  const id = nanoid()
  const date = moment().format('D MMM YYYY');
  // console.log(date)
  const postPost = {
    ...formData,
    id,
    date,
    name: trimName,
    location: trimLocation,
    likes: 0
  }
  console.log(postPost)
  const totalPosts = [postPost]
  console.log(totalPosts)
  setFormData({author: "", location: "", description: ""})
  await axios.post('https://insta-server-yash.vercel.app', postPost)
}

  return (
    <>
    <Header/>
      <section className="post-form">
        <div>
          <form onSubmit={postData}>
            <div>
              <input type="file" id="myFile" accept="image/*"/>
            </div>
            <div>
              <div className="Author-Location">
                <input type="text" id="author" placeholder="Author" name="author" onChange={handleChange("author")} maxLength={15} onBlur={() => !formData.author.length ? fieldsAreMandatory() : null}/>
              </div>
              <div className="Author-Location">
                <input type="text" id="location" placeholder="Location" name="location" onChange={handleChange("location")} maxLength={20} onBlur={() => !formData.location.length ? fieldsAreMandatory() : null}/>
              </div>
            </div>
            <div>
              <input type="text" id="description" maxLength={50} placeholder="Description" name="description" onChange={handleChange("description")} onBlur={() => !formData.description.length ? fieldsAreMandatory() : null}/>
            </div>
            <div id="post-btn-parent">
            <Link to='/post-view' id="postbtn-link-to-post-view-page">
            <button id="post-btn" disabled={!yes} type="submit">
            Post
            </button>
             </Link>
             </div>
          </form>
        </div>
      </section>
      <ToastContainer />

    </>
  )
}

export default PostForm;