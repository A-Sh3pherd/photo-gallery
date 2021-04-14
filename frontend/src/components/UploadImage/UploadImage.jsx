import React, {useState} from 'react';
import {Button, Form, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";
import './UploadImage.css'

const UploadImage = () => {
    //State Stuff
    const [fileInput, setFileInput] = useState();
    const [preview,setPreview] = useState('');
    const history = useHistory();

    // Uploads the images to cloudinary specific folder
    const uploadImage = async () => {
        console.log(fileInput)
        const formData = new FormData()
        formData.append('file', fileInput[0])
        formData.append('upload_preset', 'photo_gallery_app')

        const data = await axios.post("https://api.cloudinary.com/v1_1/bananalotty/image/upload", formData)
        console.log(data)
        await uploadUrlToDb(data.data.url)
    }

    //Handling the input of the image upload
    const handleFileInput = (e) => {
        const file = e.target.files[0]
        console.log(file)
        setFileInput(e.target.files)
        previewFile(file)
    }

    //Preview the image before uploading it
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = ()=> {
            setPreview(reader.result)
        }
    }

    // Upload the url given from cloudinary to the server, and from the server saving it to the database.
    const uploadUrlToDb = async (url) => {
        const user = JSON.parse(localStorage.getItem('User'))
        const user_id = user.id
        const {data} = await axios.post('http://localhost:3005/upload', {
            user_id, url
        })
        console.log(data)
        if (data === 'Success!') {
            alert('Photo was successfully uploaded!')
            history.push('/home')
        } else {
            alert('There was a problem uploading your data, please try again.')
        }
    }

    return (
        <Container id='photo-cont'>
            <Form id='photo-form'>
                <Form.Group>
                    <Form.Control
                        type='file'
                        onChange={(e) => handleFileInput(e)}
                    />
                    {preview && (
                        <img
                            src={preview}
                            alt="chosenPhoto"
                            style={{width: '365px'}}
                            className='mt-3'
                        />
                    )}
                </Form.Group>
                <Button onClick={uploadImage}>Upload Image</Button>
            </Form>

        </Container>
    );
}


export default UploadImage;
