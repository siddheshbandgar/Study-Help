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
            <div className="container" style={{background: "white", padding: "40px"}} >
                <form method="post" action="#" id="#" onSubmit={onSubmit}>
                    <div className="form-group files">
                        <label>Upload Your File </label>
                        <input type="file"
                            onChange={onInputChange}
                            className="form-control"
                            multiple/>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Subject</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Branch</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Tags</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>


                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
};
