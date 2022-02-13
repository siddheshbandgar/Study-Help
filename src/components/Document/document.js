import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios"
import Base from "../Base/base";

export default function DocumentViewer (){
    const [doc, setDoc] = useState({description:"", subject:"", branch:"", rating:"", date:"", tags:"", url:""})
    const params = useParams();
    const loadDoc = async () => {
        const token = localStorage.getItem("token");
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        };
        const docId = params.docId;
        const url = "https://study-help.herokuapp.com/api/doc/one/" + localStorage.getItem('id') + "/" + docId;
        await axios.get(url, { headers } )
        .then((response) => {
            console.log(response.data);
            const data = response.data;
            console.log(data);
            setDoc({
                description:data.description ,
                subject: data.subject,
              branch: data.branch,
              rating: data.rating,
              date: data.date,
              tags: data.tags,
              url: data.file_link
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
                    
                    <iframe src="https://research.google.com/pubs/archive/44678.pdf"
                    width="800" height="600"/>
                </div>
            </div>

        </div>
        </div>
    </Base>
    )

}