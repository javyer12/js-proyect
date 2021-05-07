import React, {useState, useEffect} from "react";
import useInitialState from '../Hooks/useInitialState';
// components
import Search from "../components/Search";
// component view 
import Categories from "../components/Categories"
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem"

// style
import '../assets/style/App.scss';


const API = 'http://localhost:3000/initalState';

const Home = () => {
   const initialState = useInitialState(API);
   
   return (
   <>
         <Search />
         {initialState.mylist?.length > 0 && (
          <Categories title="My List">
               <Carousel >
                  {initialState.mylist?.map(item =>
                        <CarouselItem key={item.id}{...item}/>
                     )
                  }
          </Carousel>
          </Categories>)
         }
{/*  ...item, lo que hace es que, una vez identificados todos los id de los item, me envia todos los que existan */}
      <Categories title='Trend' >
            <Carousel >
               { initialState.trends?.map(item => 
            <CarouselItem key={item.id}{...item} />
                     
                  )
         }
         </Carousel>
         </Categories>
         
      <Categories title='Original' >
            <Carousel >
            {
               initialState.originals?.map(item => 
            <CarouselItem key={item.id}{...item} />
                     
                  )
         } 
         </Carousel>
      </Categories>
      </>
   )
}
export default Home;