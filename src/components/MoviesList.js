import React from "react";
import { Row } from "react-bootstrap";
import CardList from "./CardList";
import Paginations from "./Paginations";

const MoviesList = ({movies ,getpage ,pageCount}) => {
  return (
    <Row className="mt-3">
    {
      movies.length >=1? (
        movies.map((mov) =>{
          return(
            <CardList key={mov.id} mov={mov} />
            
          )
        })
      ): <h3>لا يوجد بيانات</h3>
    }
    {movies.length>=1?(<Paginations getpage={getpage} pageCount={pageCount}/>):null}
     
    </Row>
  );
};

export default MoviesList;
