import React, {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function FileUploader() {
    const [formData, setFormData] = useState({
        doc: React.createRef(),
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
        const formD = new FormData();

          for(let key in formData)
          {
              if(key!="doc")
              {
                 formD.append(key, formData[key])
              }
          }
          const userId = localStorage.getItem("id");
          formD.append("doc", formData.doc.current.files[0])
          formD.append("userId",userId)

          // Details of the uploaded file
        console.log(formD.doc);

         console.log("submit function Called");
         //toast.success('Upload Success');
         
         const token = localStorage.getItem("token");
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            };
         
          //const data = { userId: userId, doc: formData.doc, doc_link: formData.doc_link, description: formData.description, subject: formData.subject, branch:formData.branch, tags:formData.tags };
          console.log(formD);
          const url = "https://study-help.herokuapp.com/api/doc/create/" + localStorage.getItem("id");
          await axios.post(url, formD, { headers } )
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
                            className="form-control"
                            ref={formData.doc}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="filelink">File Link</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="filelink" 
                            name="doc_link"
                            onChange = {onInputChange}
                            value={formData.doc_link}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <textarea 
                            className="form-control" 
                            id="desc" 
                            rows="3"
                            name="description"
                            onChange = {onInputChange}
                            value={formData.description}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subj">Subject</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            name="sub"
                            onChange = {onInputChange}
                            value={formData.subject}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="branch">Branch</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="branch" 
                            name="branch"
                            onChange = {onInputChange}
                            value={formData.branch}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tags">Tags</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="tags" 
                            name="tags"
                            onChange = {onInputChange}
                            value={formData.tags}
                        />
                    </div>

                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={() => onSubmit(formData)}
                    >Submit</button>
                </form>
            </div>
        </div>
    )
};
