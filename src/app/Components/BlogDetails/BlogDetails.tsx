import Image from 'next/image';
import React from 'react';

const BlogDetails = () => {
    return (
            <section className="agenko-blog-detils pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            
                            <div className="blog-details-wrapper">
                                <div className="agenko-post-item pf_fadeup">
                                    <div className="main-post">
                                        <div className="post-thumbnail">
                                        <Image src="/assets/images/pages/blog/blog-single1.jpg" alt="img" width={777} height={605}   />
                                        </div>
                                        <div className="post-content" style={{marginBottom: '0px'}}>
                                            <div className="post-meta">
                                            <span><i className="bi bi-person"></i>Gabriella Lisboa</span>
                                        <span><i className="bi bi-calendar-fill"></i>30/09/2025</span>
                                        <span><i className="bi bi-chat"></i>5 Comentários</span>
                                            </div>
                                            <h4 className="post-title" style={{textAlign: 'justify', hyphens: 'auto'}}>Laser Lavieen: A Revolução no Rejuvenescimento da Harmonização Orofacial</h4>
                                            {/* <blockquote>
                                                <div className="icon"><i className="flaticon-inverted-commas"></i></div>
                                                {/* <div className="author-info">
                                                    <h4>Gabriella Lisboa</h4>
                                                    <h5>Harmonização Facial</h5>
                                                </div>
                                            </blockquote> */}
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>Você já ouviu falar do &quot;efeito BB Cream&quot; sem maquiagem? Uma pele uniforme, com brilho natural e textura aveludada é o desejo de muitos pacientes que buscam realçar sua beleza. No universo da estética avançada, o Laser Lavieen surge como uma das tecnologias mais eficazes para alcançar esse objetivo, sendo um pilar fundamental nos tratamentos de Harmonização Orofacial em Goiânia.</p>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>Neste artigo, vamos explorar o que é o Laser Lavieen e quais os benefícios que ele traz para a sua pele e para a sua autoestima.</p>
                                            <h4 className="post-title" style={{textAlign: 'justify', hyphens: 'auto'}}>O que é o Laser Lavieen?</h4>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>O Laser Lavieen é uma tecnologia de laser não ablativo que atua na camada mais superficial da pele, promovendo uma renovação celular intensa sem o tempo de recuperação agressivo de outros lasers. Ele é conhecido por sua versatilidade e precisão, restaurando a saúde da pele de dentro para fora e proporcionando um rejuvenescimento notável.</p>
                                            <h4 className="post-title" style={{textAlign: 'justify', hyphens: 'auto'}}>Principais Benefícios do Laser Lavieen na Estética Facial</h4>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>A aplicação do Lavieen vai muito além de um simples tratamento. Ele é uma ferramenta poderosa para quem busca uma pele visivelmente mais saudável e jovem.</p>
                                            <h5>1. Estímulo Intenso de Colágeno e Elastina</h5>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>Um dos maiores benefícios do Lavieen é sua capacidade de aquecer as camadas da pele e estimular a produção de colágeno e elastina, as proteínas responsáveis pela firmeza e elasticidade. Este processo é fundamental para tratar a flacidez, complementando tratamentos como os Bioestimuladores de Colágeno que também atuam na reestruturação dérmica.</p>
                                            <h5>2. Adeus às Manchas e Melasmas</h5>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>Manchas solares, melasmas e outras descolorações são tratadas de forma eficaz. O laser atua diretamente nos pigmentos, quebrando-os e promovendo um clareamento progressivo, resultando em um tom de pele visivelmente mais uniforme e livre de imperfeições.</p>
                                            <h5>3. Redução de Poros e Melhora da Textura</h5>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}> Para quem se incomoda com poros dilatados e uma textura irregular, o Lavieen é um grande aliado. Ele promove a contração dos poros e suaviza a superfície da pele, conferindo um aspecto mais liso, refinado e com o famoso &quot;glow&quot; natural.</p>
                                            <h5>4. Tratamento de Cicatrizes de Acne e Linhas Finas</h5>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>O processo de renovação celular induzido pelo laser também é excelente para suavizar cicatrizes de acne e tratar as linhas de expressão mais finas. O resultado é uma pele com aparência mais jovem e saudável.</p>
                                            <h4 className="post-title" style={{textAlign: 'justify', hyphens: 'auto'}}>A Jornada para uma Pele Renovada na Studio Dental</h4>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>Aqui na Studio Dental, entendemos que cada pele é única. Por isso, o tratamento com Laser Lavieen é sempre precedido por uma avaliação personalizada e gratuita.</p>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>Nossa especialista, Dra. Gabriella Lisboa, analisará suas necessidades e criará um plano de tratamento exclusivo, que pode integrar o Lavieen a outros procedimentos de Harmonização Orofacial para potencializar seus resultados e garantir uma beleza natural e duradoura.</p>
                                            <h4 className="post-title" style={{textAlign: 'justify', hyphens: 'auto'}}>Conclusão: Uma Nova Era para Sua Pele</h4>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>O Laser Lavieen não é apenas uma tecnologia; é um investimento na saúde da sua pele e na sua confiança. Seus benefícios, que vão da melhora da textura ao tratamento de manchas, fazem dele um dos procedimentos mais procurados na estética facial moderna.</p>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>Pronto(a) para descobrir como o Laser Lavieen pode ser integrado ao seu plano de Harmonização Facial e revelar a melhor versão da sua pele?</p>
                                            <h4 className="post-title" style={{textAlign: 'justify', hyphens: 'auto'}}> <a href="/contact">Clique aqui e Agende sua Avaliação Personalizada com a Dra. Gabriella Lisboa!</a></h4>
                                            {/* <div className="row">
                                                <div className="col-md-6">
                                                    <div className="block-image mb-40">
                                                    <Image src="/assets/images/pages/blog/blog-single2.jpg" alt="img" width={377} height={377}   />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="block-image mb-40">
                                                    <Image src="/assets/images/pages/blog/blog-single3.jpg" alt="img" width={377} height={377}   />
                                                       
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <h4 className="post-title" style={{textAlign: 'justify', hyphens: 'auto'}}>Research & strategy</h4>
                                            <p style={{textAlign: 'justify', hyphens: 'auto'}}>Conducting comprehensive research and crafting data-driven strategies to support informed decision-making, streamline operations, and achieve sustainable growth while aligning with organizational goals and market demands.</p> */}
                                            <ul className="check-list style-one">
                                                <li><i className="bi bi-check2-square"></i>Rejuvenescimento a Laser (Lavieen)</li>
                                                <li><i className="bi bi-check2-square"></i>Estímulo de Colágeno e Elastina</li>
                                                <li><i className="bi bi-check2-square"></i>Tratamento de Manchas e Melasma</li>
                                                <li><i className="bi bi-check2-square"></i>Redução de Poros e Melhora da Textura da Pele</li>
                                                <li><i className="bi bi-check2-square"></i>Suavização de Linhas Finas e Cicatrizes</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="entry-footer wow fadeInUp" style={{display: 'flex', alignItems: 'left', gap: '0px'}}>
                                        <div className="tag-links" style={{marginRight: '0px'}}>
                                            <span>Tags:</span>
                                            <a href="#">LASER LAVIEEN</a>
                                            <a href="#">HARMONIZAÇÃO OROFACIAL</a>
                                            <a href="#">ESTÉTICA FACIAL</a>
                                            <a href="#">REJUVENESCIMENTO FACIAL</a>
                                            <a href="#">TRATAMENTO DE MELASMA</a>
                                            <a href="#">COLÁGENO</a>
                                            <a href="#">GOIÂNIA</a>
                                            <a href="#">GOIÁS</a>
                                            <a href="#">BRASIL</a>
                                        </div>
                                        <div className="social-share" style={{marginLeft: '0px'}}>
                                            <span>Redes Sociais:</span>
                                            {/* <a href="#"><i className="bi bi-facebook"></i></a>
                                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                            <a href="https://share.google/pcuCYJHPmM1pRPwpc" target="_blank" rel="noopener noreferrer"><i className="bi bi-google"></i></a>
                                            <a href="https://www.instagram.com/dragabriellalisboa/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i> </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="comments-area mt-60 mb-50 pf_fadeup">
                                    <h3 className="comments-title">Popular Comments</h3>
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment">
                                                <div className="comment-avatar">
                                                <Image src="/assets/images/pages/blog/comment1.jpg" alt="img" width={100} height={100}   />
                                                </div>
                                                <div className="comment-wrap">
                                                    <div className="comment-author-content">
                                                        <span className="author-name">Mr. David Liam</span>
                                                        <p>Streamlining processes with an optimized workflow that enhances efficiency, fosters collaboration, and ensures seamless execution </p>
                                                        <a href="#" className="reply">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment">
                                                <div className="comment-avatar">
                                                <Image src="/assets/images/pages/blog/comment2.jpg" alt="img" width={100} height={100}   />
                                                </div>
                                                <div className="comment-wrap">
                                                    <div className="comment-author-content">
                                                        <span className="author-name">Michel holder</span>
                                                        <p>Streamlining processes with an optimized workflow that enhances efficiency, fosters collaboration, and ensures </p>
                                                        <a href="#" className="reply">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
                                {/* <div className="agenko-contact-form style-two mb-30 pf_fadeup">
                                    <h3 className="comments-heading mb-25">Leave a Comments</h3>
                                    <form className="comment-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form_control" placeholder="Enter Name" name="email"  />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form_control" placeholder="Email Address" name="email"  />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form_control" rows={4} placeholder="Write Comments"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <button className="theme-btn style-two">Post Your Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-4">
                            
                            <div className="sidebar-widget-area">
                                
                                <div className="sidebar-widget sidebar-search-widget mb-30 pf_fadeup">
                                    <div className="widget-content">
                                        <h4 className="sidebar-title">Procurar</h4>
                                        <form>
                                            <div className="form-group">
                                                <input type="search" className="form_control" placeholder="Pesquise aqui..." name="search" required />
                                                <button className="search-btn"><i className="bi bi-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="sidebar-widget sidebar-category-widget mb-30 pf_fadeup">
                                    <div className="widget-content">
                                        <h4 className="sidebar-title">Categorias</h4>
                                        <ul className="widget-nav">
                                            <li><a href="#">Harmonização Orofacial <span>(05)</span></a></li>
                                            <li><a href="#">Rejuvenescimento Facial <span>(03)</span></a></li>
                                            <li><a href="#">Preenchimento e Contorno <span>(06)</span></a></li>
                                            <li><a href="#">Tratamentos para Flacidez  <span>(08)</span></a></li>
                                            <li><a href="#">Cuidados com a Pele  <span>(10)</span></a></li>
                                            <li><a href="#">Dicas e Mitos sobre HOF  <span>(12)</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="sidebar-widget sidebar-post-widget mb-30 pf_fadeup">
                                    <div className="widget-content">
                                        <h4 className="sidebar-title">Posts Recentes</h4>
                                        <ul className="recent-post-list">
                                            <li className="post-thumbnail-content">
                                            <Image src="/assets/images/pages/blog/post-thumb1.jpg" alt="img" width={100} height={110}   />
                                                <div className="post-title-date">
                                                    <span><a href="#">Website</a></span>
                                                    <h6><a href="#">Flavorful Fusion: Exploring the Art
                                                        of culinary blending</a></h6>
                                                </div>
                                            </li>
                                            <li className="post-thumbnail-content">
                                            <Image src="/assets/images/pages/blog/post-thumb2.jpg" alt="img" width={100} height={110}   />
                                                <div className="post-title-date">
                                                    <span><a href="#">Dashboard</a></span>
                                                    <h6><a href="#">Chef Spotlight: Behind the scenes
                                                        of culinary mastery</a></h6>
                                                </div>
                                            </li>
                                            <li className="post-thumbnail-content">
                                            <Image src="/assets/images/pages/blog/post-thumb3.jpg" alt="img" width={100} height={110}   />
                                                <div className="post-title-date">
                                                    <span><a href="#">Mobile App</a></span>
                                                    <h6><a href="#">Time-Honored recipes with a 
                                                        modern twist</a></h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="sidebar-widget sidebar-tag-widget pf_fadeup mb-30">
                                    <div className="widget-content">
                                        <h4 className="sidebar-title">Popular Tags</h4>
                                        <div className="tagcloud">
                                            <a href="#">Design</a>
                                            <a href="#">Creative</a>
                                            <a href="#">Modern</a>
                                            <a href="#">Digital</a>
                                            <a href="#">Minimal</a>
                                            <a href="#">Agenko</a>
                                            <a href="#">Business</a>
                                            <a href="#">Financial</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default BlogDetails;