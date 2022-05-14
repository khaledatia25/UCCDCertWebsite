import React  from 'react';
import { useParams } from 'react-router-dom';

const ParamsRouter = ({component:Component}) => {
    const params = useParams();
    return(<Component  params={params}/>
    );}


export default ParamsRouter;    



