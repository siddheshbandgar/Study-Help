import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios"
import Base from "../Base/base";
import { DockSharp } from "@mui/icons-material";
import { Document, Page } from 'react-pdf';

export default function DocumentViewer (){
    const [doc, setDoc] = useState({description:"", subject:"", branch:"", rating:"", date:"", tags:"", url:"", file:null, type:""})
    const params = useParams();
    const loadFile = async () => {
        const token = localStorage.getItem("token");
        const headers = {
            "Content-Type": "application/json",
        };
        axios.get(doc.url, { headers } )
        .then((response) => {
            console.log(response.data);
            const data = response.data;
            console.log(data);
            setDoc({
                ...doc,
                file: data
            });

        })
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    }

    useEffect(() => {
        if(doc.url)
        {
            loadFile();
        }
    }, [doc.url])

    const loadDoc = async () => {
        const token = localStorage.getItem("token");
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        };
        const docId = params.docId;
        const url = "https://study-help.herokuapp.com/api/doc/one/" + localStorage.getItem('id') + "/" + docId;
        axios.get(url, { headers } )
        .then((response) => {
            console.log(response.data);
            const data = response.data;
            console.log(data);
            setDoc({
                ...doc,
                description:data.description ,
                subject: data.subject,
              branch: data.branch,
              rating: data.rating,
              date: data.date,
              tags: data.tags,
              url: data.file_link,
              type: data.type
            });

        })
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
        
    }

    // This function will called only once
    useEffect(() => {
        loadDoc();
    }, [])

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
    <Base>
        <div className="auth-wrapper">
        <div
            className="container"
            style={{ background: "white", padding: "40px", marginTop:"50px" }}
        >
            <div class="row">
                <div class="col-sm-3">
                    <h1>Doc Viewer</h1>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                            <th scope="row">Description</th>
                            <td>{doc.description}</td>
                            </tr>
                            <tr>
                            <th scope="row">Subject</th>
                            <td>{doc.subject}</td>
                            </tr>
                            <tr>
                            <th scope="row">Branch</th>
                            <td colspan="2">{doc.branch}</td>
                            </tr>
                            <tr>
                            <th scope="row">Rating</th>
                            <td>{doc.rating}</td>
                            </tr>
                            <tr>
                            <th scope="row">Uploaded On</th>
                            <td>{doc.date}</td>
                            </tr>
                            <tr>
                            <th scope="row">Tags</th>
                            <td colspan="2">{doc.tags}</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
                <div class="col-sm-6">
                    { doc && doc.type==="pdf" ? 
                        <iframe src="http://www.africau.edu/images/default/sample.pdf" width="800" height="600"> </iframe>
                        
                        : <img src= {doc.url}
                        width="800" height="600"
                        />
                    }
                        
                    
                </div>
            </div>

        </div>
        </div>
    </Base>
    )

}