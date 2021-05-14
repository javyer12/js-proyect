import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import { setSearchText } from "../actions";
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
   const regex = new RegExp(`.*${searchText.toLowerCase()}.*`);
   return (
      <>
 <Header/>
         <Search isHome />
         {
            setSearchText  && (
               <Categories title='resultado de la busqueda'>
                  <Carousel>
                     {
                        trends.filter((item) => regex.test(item.title.toLowerCase())).map((item) => (
                           <CarouselItem key={item.id}{...item}/>
                        ))
                     }
                     {
                        originals.filter((item) => regex.test(item.title.toLowerCase())).map((item) => (
                           <CarouselItem key={item.id}{...item}/>
                        ))
                     }
                  </Carousel>
                  </Categories>
            )
         }
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
const mapDispatchToProps = {
   searchText: searchText,
 }
export default connect(mapStateToProps, mapDispatchToProps)(Home)