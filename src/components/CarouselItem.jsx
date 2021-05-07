import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux";
import setFavorite from "../actions"
// style 
import '../assets/style/components/CarouselItem.scss';
// media 
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props)=>{
    const { cover, title, year, contentRating, duration } = props;
    const handleSetFavorite = () => {
        props.setFavorite(
            {
                cover, title, year, contentRating, duration    
            }
        )
    }

    return (
    <div className="carousel-item">
            <img
                className="carousel-item__img"
                src={cover}
                alt={title} />
          <div className="carousel-item__details">
             <div>
            <img
                className="carousel-item__details--img"
                src={playIcon}
                alt="Play Icon" />
            <img
                className="carousel-item__details--img"
                src={plusIcon}
                alt="Plus Icon"
                onClick={handleSetFavorite}/>
             </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
          </div>
    </div>
   );
   }
CarouselItem.prototype = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}
// export default CarouselItem;
const mapDispatchToProps =  {
    setFavorite,
}
export default connect(null,mapDispatchToProps)(CarouselItem)