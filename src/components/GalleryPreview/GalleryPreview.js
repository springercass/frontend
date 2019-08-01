import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container, Image } from 'semantic-ui-react'

function GalleryPreview() {

    const [imageArray, setImageArray] = useState([])
    
    useEffect(() => {
    Axios
        .get("https://art-portfolio-be.herokuapp.com/api/posts")
        .then(res => setImageArray(res.data))
        .catch(err => console.log(err, "there was an error, whoops"))
    }, [])

    let urlArray = imageArray.map(obj => obj.url).splice(0, 9)
    console.log(urlArray)

    return (
        <div className='gallery-preview'>
            {urlArray.map(url => {
                return <Image className='gallery-image' src={url}/>
            })}
        </div>
    )

}

export default GalleryPreview