import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
// components
import Search from "../components/Search";
import Header from '../components/Header';

// component view 
import Categories from "../components/Categories"
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem"

// style
import '../assets/style/App.scss';



const Home = ({myList, trends, originals}) => {
   
   return (
      <>
 <Header/>
<Search isHome />
         {myList?.length > 0 && (
          <Categories title="My List">
               <Carousel >
                  {myList?.map(item =>
                     <CarouselItem
                        key={item.id}
                        {...item}
                        isList/>
                     )
                  }
          </Carousel>
          </Categories>)
         }
{/*  ...item, lo que hace es que, una vez identificados todos los id de los item, me envia todos los que existan */}
      <Categories title='Trend' >
            <Carousel >
               {trends?.map(item => 
            <CarouselItem key={item.id}{...item} />
                     
                  )
         }
         </Carousel>
         </Categories>
         
      <Categories title='Original' >
            <Carousel >
            {originals?.map(item => 
            <CarouselItem key={item.id}{...item} />
                     
                  )
         } 
         </Carousel>
      </Categories>
      </>
   )
}


// export default Home;traer solo los elementos que se van a nececitar
const mapStateToProps = state => {
   return {
      myList: state.myList,
      trends: state.trends,
      originals: state.originals,
   }
}
export default connect(mapStateToProps, null)(Home)