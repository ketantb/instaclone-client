import Header from "./header";
import "../styles/post_form.css"
import { useState, useEffect } from "react";
// import { data } from "./data";
import { nanoid } from "nanoid";
import moment from "moment/moment";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Slide, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostForm = () => {

  const [userData, setUserData] = useState()
  const fetchData = async () => {
    try {
      await axios.get('http://localhost:8081/all')
        .then((data) => {
          setUserData(data.data)
          console.log(data.data)
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  // console.log(userData)

  const [form, setForm] = useState({ author: "", location: "", description: "", image: "", likes: 0 })
  // const [image, setImage] = useState("")
  const handleChange = (params) => (e) => {
    setForm({ ...form, [params]: e.target.value })
  }

  const handleImage = (params) => (e) => {
    setForm({ ...form, [params]: e.target.files[0] })
  }

  const yes = form.author.length && form.location.length && form.description.length && form.image

  const fieldsAreMandatory = () => toast.warn("Author, Location & Description are mandatory Fields", {
    position: toast.POSITION.BOTTOM_CENTER

  });

  const postData = async (e) => {
    e.preventDefault()
    let trimName = form.author
      .split(' ')
      .filter((i) => i !== '')
      .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
      .join(' ');
    let trimLocation = form.location
      .split(' ')
      .filter((i) => i !== '')
      .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
      .join(' ')
    const id = nanoid()
    const date = moment().format('D MMM YYYY');
    // console.log(date)
    const formDataObj = new FormData()
    formDataObj.append("date", date)
    formDataObj.append("description", form.description)
    formDataObj.append("id", id)
    formDataObj.append("likes", form.likes)
    formDataObj.append("location", trimLocation)
    formDataObj.append("image", form.image)
    formDataObj.append("name", trimName)
    // console.log(formDataObj)
    // formDataObj.forEach((i) => {console.log(i)})
    // const postPost = {
    //   ...form,
    //   id,
    //   date,
    //   name: trimName,
    //   location: trimLocation,
    //   likes: 0
    // }
    // console.log(postPost)
    // const totalPosts = [...userData, ...formDataObj]
    // console.log(`totalPosts: ${totalPosts}`)
    setForm({ author: "", location: "", description: "", image: "", likes: 0 })
    await axios.post('http://localhost:8081/post', formDataObj)
  }
  // console.log(form.image)
  return (
    <>
      <Header />
      <section className="post-form">
        <div>
          <form onSubmit={postData}>
            <div>
              <input type="file" id="myFile" accept="image/*" onChange={handleImage("image")} />
            </div>
            <div>
              <div className="Author-Location">
                <input type="text" id="author" placeholder="Author" name="author" onChange={handleChange("author")} maxLength={15} onBlur={() => !form.author.length ? fieldsAreMandatory() : null} value={form.author}/>
              </div>
              <div className="Author-Location">
                <input type="text" id="location" placeholder="Location" name="location" onChange={handleChange("location")} maxLength={20} onBlur={() => !form.location.length ? fieldsAreMandatory() : null} value={form.location}/>
              </div>
            </div>
            <div>
              <input type="text" id="description" maxLength={50} placeholder="Description" name="description" onChange={handleChange("description")} onBlur={() => !form.description.length ? fieldsAreMandatory() : null} value={form.description}/>
            </div>
            <div id="post-btn-parent">
              <button id="post-btn" disabled={!yes} type="submit">
                  Post
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer
        autoClose={1500}
        transition={Slide}
        limit={5}
        theme={"light"}
        pauseOnFocusLoss={false}
      />
    </>
  )
}

export default PostForm;