import React from 'react';

export default function FileUploader() {

    const onInputChange = (e) => {
        //
    };

    const onSubmit = (e) => {
        //
    };

    return (
        <div className="auth-wrapper">
            <div className="container" style={{ marginTop: '100px', background: "white", padding: "40px"}} >
                <form method="post" action="#" id="#" onSubmit={onSubmit}>
                    <div className="form-group files">
                        <label>Upload Your File </label>
                        <input type="file"
                            onChange={onInputChange}
                            className="form-control"
                            multiple/>
                    </div>
                    <div class="form-group">
                        <label for="filelink">File Link</label>
                        <input type="text" class="form-control" id="filelink" />
                    </div>

                    <div class="form-group">
                        <label for="desc">Description</label>
                        <textarea class="form-control" id="desc" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="subj">Subject</label>
                        <input type="text" class="form-control" id="subj" />
                    </div>
                    <div class="form-group">
                        <label for="branch">Branch</label>
                        <input type="text" class="form-control" id="branch" />
                    </div>
                    <div class="form-group">
                        <label for="tags">Tags</label>
                        <input type="text" class="form-control" id="tags" />
                    </div>


                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
};
