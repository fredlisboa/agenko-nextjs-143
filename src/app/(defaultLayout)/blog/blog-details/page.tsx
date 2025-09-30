import BlogDetails from '../../../Components/BlogDetails/BlogDetails';
import BreadCumb from '../../../Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
              <BreadCumb
                Title="Blog"
                content="Harmonização Orofacial em Goiânia-GO"
            ></BreadCumb> 
            <BlogDetails></BlogDetails>       
    </div>
  );
};

export default page;