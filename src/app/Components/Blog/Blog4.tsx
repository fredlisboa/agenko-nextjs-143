import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog4 = () => {

    const blogContent = [
        {img:'/assets/images/pages/blog/lvieen-410x320.png', title:'Laser Lavieen: A Revolução no Rejuvenescimento da Harmonização Orofacial', content:'Descubra como o Laser Lavieen transforma a pele, tratando manchas, rugas e flacidez. Entenda por que ele é um pilar da Harmonização Orofacial em Goiânia para resultados naturais e duradouros. Agende sua avaliação.'},
        // {img:'/assets/images/pages/blog/blog2.jpg', title:'Sales management mobile app design solutions', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        // {img:'/assets/images/pages/blog/blog3.jpg', title:'Financial and wallet website design services', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        // {img:'/assets/images/pages/blog/blog4.jpg', title:'Sales Team Productivity Starts with Great App Design', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        // {img:'/assets/images/pages/blog/blog5.jpg', title:'Optimizing Sales Workflows with Effective App UI/UX Design', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        // {img:'/assets/images/pages/blog/blog6.jpg', title:'Boost Sales Efficiency with Smart Mobile App Design Strategies', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
      ]; 


    return (
            <section className="agenko-blog-grid pt-130 pb-80">
                <div className="container">
                    <div className="row">
                    {blogContent.map((item, i) => (
                        <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                            <div className="agenko-blog-item style-four mb-40 pf_fadeup">
                                <div className="post-thumbnail">
                                <Image src={item.img} alt="img" width={414} height={323}   />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span><i className="bi bi-person"></i>Gabriella Lisboa</span>
                                        <span><i className="bi bi-calendar-fill"></i>30/09/2025</span>
                                        <span><i className="bi bi-chat"></i>5 Comentários</span>
                                    </div>
                                    <h4 className="title" style={{textAlign: 'justify', hyphens: 'auto'}}><Link href="/blog/blog-details">{item.title}</Link></h4>
                                    <p style={{textAlign: 'justify', hyphens: 'auto'}}>{item.content}</p>
                                </div>
                            </div>
                        </div>
                        ))} 
                    </div>

                </div>
            </section>
    );
};

export default Blog4;