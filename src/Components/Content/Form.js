import React, { Component } from "react";

class Form extends Component  {
    constructor(props){
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit(e){
        var file, 
        reader = new FileReader();
  
    // Upload the file to Google Drive
        reader.onloadend = function(e) {
        google.script.run
            .withSuccessHandler(showMessage)
            .uploadFileToGoogleDrive(
            e.target.result, file.name, 
            $('input#name').val(), 
            $('input#email').val()
            );
        };
    
        // Read the file on form submit
        (function submitForm(e) {
        var form = e.currentTarget;
        var File = form.querySelector('input[type=file]');
        console.log(File)
        // file = $('#file')[0].files[0];
        showMessage("Uploading file..");
        reader.readAsDataURL(file);
        })()
    
        function showMessage(e) {
        $('#progress').html(e);
        }
        return false; 
    }

    render(){
        return(
            <div>
                    <form>
                    <input id="name" type="text" placeholder="Your Name" />
                    <input id="email" type="email" placeholder="Your Email" />
                    <input id="file" type="file" />
                    <button onClick={this.submit}>Submit</button>
                    <div id="progress"></div>
                    </form>
            
            </div>
        )
    }
}

export default Form