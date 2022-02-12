import React, {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function FileUploader() {
    const [formData, setFormData] = useState({
        userId: "kush",
        doc: "doc",
        doc_link: "http//docs.com/file_name",
        description: "Some description about doc",
        subject: "Cloud Computing",
        branch: "Computer Engg",
        tags: "CC, SEM8, Final Year",
      });

    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (formData) => {
        console.log(formData);
         console.log("Response function Called");
         toast.success('Upload Success');
         
          const data = { userId: formData.userId, doc: formData.doc, doc_link: formData.doc_link, description: formData.description, subject: formData.subject, branch:formData.branch, tags:formData.tags };
          const url = "https://study-help.herokuapp.com/api/doc/create/" + localStorage.getItem("id");
          await axios.post(url, data)
            .then((response) => {
              console.log(response);
              const msg = "Uploaded Successfully";
              console.log(msg);
            })
            .catch((error) => {
              console.log(error);
              if (error.response) {
                console.assert(error.response.data.message);
              } else {
                console.assert("Something went wrong. Check that the backend is running, reachable and returns valid JSON.");
              }
            } );
            
      };

    return (
        <div className="auth-wrapper">
            <div className="container" style={{ marginTop: '100px', background: "white", padding: "40px"}} >
                <form>
                    <div className="form-group files">
                        <label>Upload Your File </label>
                        <input type="file"
                            onChange={onInputChange}
                            className="form-control"
                            name="doc"
                            multiple/>
                    </div>
                    <div class="form-group">
                        <label for="filelink">File Link</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="filelink" 
                            name="doc_link"
                            value={formData.doc_link}
                        />
                    </div>

                    <div class="form-group">
                        <label for="desc">Description</label>
                        <textarea 
                            class="form-control" 
                            id="desc" 
                            rows="3"
                            name="description"
                            value={formData.description}
                        ></textarea>
                    </div>
                    <div class="form-group">
                        <label for="subj">Subject</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="subject" 
                            name="sub"
                            value={formData.subject}
                        />
                    </div>
                    <div class="form-group">
                        <label for="branch">Branch</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="branch" 
                            name="branch"
                            value={formData.branch}
                        />
                    </div>
                    <div class="form-group">
                        <label for="tags">Tags</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="tags" 
                            name="tags"
                            value={formData.tags}
                        />
                    </div>

                    <button 
                        type="button" 
                        class="btn btn-success"
                        onClick={() => onSubmit(formData)}
                    >Submit</button>
                </form>
            </div>
        </div>
    )
};
