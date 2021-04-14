import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Image} from 'cloudinary-react'
import {Carousel, Container} from "react-bootstrap";

const PhotoList = () => {
    //State stuff
    const [photos, setPhotos] = useState([])
    const user = JSON.parse(localStorage.getItem('User'))

    //Load photos from db
    const getPhotos = async () => {
        const {data} = await axios.get(`http://localhost:3005/photos/${user.id}`)
        return data
    }

    // When components loads, fetch the data from the server
    useEffect(() => {
        getPhotos()
            .then(r => setPhotos(r))
            .catch(err => console.log(err))
    }, [])
    return (
        <Container className={'d-flex justify-content-center'}>
            <Carousel fade>
                {photos.map((photo, index) => {
                    return (
                        <Carousel.Item interval={2000} key={index}>
                            <Image
                                cloudName='bananalotty'
                                publicId={photo}
                                className="d-block w-100 mt-5"
                                crop='fill'
                                style={{height: '80vh'}} />

                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    );
};

export default PhotoList;
