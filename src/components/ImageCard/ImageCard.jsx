import css from './imageCard.module.css'

const ImageCard = ({ handleClick, item }) => {
    return (
      <div>
        <img className={css.img} src={item.urls.small} alt={item.alt_description} 
          onClick={() => handleClick(item.urls.regular)}/>
      </div>
    );
  };

  export default ImageCard