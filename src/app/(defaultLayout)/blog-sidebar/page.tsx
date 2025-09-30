import BlogSidebar from '../../Components/BlogSidebar/BlogSidebar';
import BreadCumb from '../../Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
               <BreadCumb
                Title="Blog Dra Gabriella Lisboa"
                content="Harmonização Orofacial em Goiânia-GO"
            ></BreadCumb>  
            <BlogSidebar></BlogSidebar>         
    </div>
  );
};

export default page;