

 const ImageGallery = ({ results }) => {

    return(
    <ul>

	{results.map(item => <li key={item.id}>
        <div>
            <img src={item.urls.small} alt={item.alt_description}/> 
        </div> </li>)}
	 
    </ul>
    )
}

export default ImageGallery;