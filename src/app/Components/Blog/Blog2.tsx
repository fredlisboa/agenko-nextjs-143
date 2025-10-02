"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Blog2 = () => {

    const blogContent = [
        {img:'/assets/images/digital-agency/blog/lavieen-1290x246.png', title:'Laser Lavieen: A Revolução no Rejuvenescimento da Harmonização Orofacial',authorImg:'/assets/images/digital-agency/blog/gabi-70x70.png', date: '30/09/2025', url:'/blog/lavieen'},
        {img:'/assets/images/digital-agency/blog/hof-1290x246.png', title:'Harmonização Orofacial em Goiânia: O Guia Definitivo para um Rosto em Equilíbrio',authorImg:'/assets/images/digital-agency/blog/gabi-70x70.png', date:'20/02/2025', url:'/blog/guia-harmonizacao'},
        // {img:'/assets/images/digital-agency/blog/blog1.jpg', title:'How to Start a Blog Beginner Best',authorImg:'/assets/images/digital-agency/blog/author1.jpg'},
      ]; 

      useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section id="blog" className="agk-blogs gray-dark pt-80 pb-30">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    
                    <div className="section-title mb-50 pf_fadeup">
                        <span className="sub-title">Últimos Artigos</span>
                        {/* <h2>Our Global Client</h2> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    
                    <div className="agk-button float-lg-end mb-60 pf_fadeup">
                        <a href="/blog" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">Ver Todos Artigos</span>
                                <span className="text">Ver Todos Artigos</span>
                            </span>
                        </a>
                    </div>    
                </div>
            </div>
            <div className="row">
            {blogContent.map((item, i) => (
                <div key={i} className="col-lg-12">
                    <div className="agenko-blog-item style-one mb-40 pf_fadeup">
                        <div className="post-hover-wrap bg_cover" data-background={item.img}>
                            <div className="agk-button">
                                <Link href={item.url} className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">Saiba Mais</span>
                                        <span className="text">Saiba Mais</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="post-inner-wrap">
                            <div className="author-item">
                                <div className="author-thumb">
                                    <Image src={item.authorImg} alt="Author Image" width={120} height={80} />
                                </div>
                                <div className="author-info">
                                    <span>Postado por</span>
                                    <h4>Dra. Gabriella Lisboa</h4>
                                </div>
                            </div>
                            <div className="post-content">
                                <h3 className="title"><Link href={item.url}>{item.title}</Link></h3>
                                <div className="post-categories">
                                    <a href="#">Artigos</a>
                                    <a href="#">Blog</a>
                                </div>
                            </div>
                            <div className="post-date">
                            <i className="bi bi-calendar-check"></i>
                                <a href="#">{item.date}</a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}


            </div>
        </div>
    </section>
    );
};

export default Blog2;