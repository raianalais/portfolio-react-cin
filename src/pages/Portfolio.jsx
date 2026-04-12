import React from 'react';
import styles from './Portfolio.module.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/" className={styles.backLink}><span>&#10094;</span> VOLTAR PARA HOME</Link>
                <h1 className={styles.title}>Meus Projetos</h1>
            </header>

            <section className={styles.content}>

                {/* Projeto CAD - Alerta Campus */}
                <div className={styles.card}>
                    <div className={styles.projectHeader}>
                        <span className={styles.iconDot}></span>
                        <h2>Alerta Campus (CAD - Concepção de Artefatos Digitais)</h2>
                    </div>
                    
                    <h3>Sobre o Projeto</h3>
                    <p>Este projeto foi desenvolvido como trabalho final da disciplina Concepção de Artefatos Digitais e apresentado na Feira de Impacto Social da mesma disciplina, com foco em soluções tecnológicas de impacto social.</p>

                    <h3>Sobre o App</h3>
                    <p>O Alerta Campus é um aplicativo desenvolvido com o objetivo de aumentar a segurança da comunidade acadêmica da UFPE, especialmente no período noturno. O app permite receber notificações de alerta, registrar chamados descritivos e enviar chamados de emergência diretamente ao DSI.</p>

                    <div className={styles.imageGallery}>
                        <img src="/~rlpd/assets/alerta-1.jpeg" alt="Alerta Campus Tela 1" className={styles.projectImg} />
                        <img src="/~rlpd/assets/alerta-2.jpeg" alt="Alerta Campus Tela 2" className={styles.projectImg} />
                    </div>

                    <div className={styles.techSection}>
                        <h3>Tecnologias Utilizadas</h3>
                        <div className={styles.tags}>
                            <span>Lovable</span> <span>Vite</span> <span>TypeScript</span> <span>React</span>
                            <span>shadcn-ui</span> <span>Tailwind CSS</span> <span>Leaflet</span>
                        </div>
                    </div>

                    <div className={styles.footerInfo}>
                        <div className={styles.links}>
                            <a href="https://alerta-campus.lovable.app/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>Protótipo Lovable</a>
                            <a href="https://github.com/anaclarays/alerta-campus.git" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>GitHub</a>
                        </div>
                        <h3>Equipe - CIntilante</h3>
                        <p className={styles.team}>Ana Clara Bizarria, Byanca Hayally Souza, Jaianny Karla Souza, Raiana Laís Donato e Samara Petrilly</p>
                    </div>
                </div>

                {/* Projeto IP - O Pesadelo de Jack */}
                <div className={styles.card}>
                    <div className={styles.projectHeader}>
                        <span className={styles.iconDot}></span>
                        <h2>O pesadelo de Jack (IP - Introdução à Programação)</h2>
                    </div>
                    
                    <h3>Sobre o Projeto</h3>
                    <p>Este projeto foi desenvolvido como um dos requisitos para a conclusão da disciplina Introdução à Programação.</p>

                    <h3>Sobre o Jogo</h3>
                    <p>O Pesadelo de Jack é um jogo 2D inspirado no filme O Estranho Mundo de Jack. O jogador é desafiado a tomar decisões estratégicas enquanto explora um cenário que mescla elementos sombrios do Halloween com aspectos natalinos.</p>

                    <div className={styles.imageGallery}>
                        <img src="/~rlpd/assets/jack-1.jpeg" alt="O Pesadelo de Jack Print 1" className={styles.projectImg} />
                        <img src="/~rlpd/assets/jack-2.jpeg" alt="O Pesadelo de Jack Print 2" className={styles.projectImg} />
                    </div>

                    <div className={styles.techSection}>
                        <h3>Tecnologias Utilizadas</h3>
                        <div className={styles.tags}>
                            <span>Python</span> <span>Pygame</span> <span>Trello</span>
                        </div>
                    </div>

                    <div className={styles.footerInfo}>
                        <div className={styles.links}>
                            <a href="https://github.com/jaikarla/O-pesadelo-de-Jack.git" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>GitHub</a>
                        </div>
                        <h3>Equipe - CIntilante</h3>
                        <p className={styles.team}>Ana Clara Bizarria, Byanca Hayally Souza, Maria Cláudia Rocha, Jaianny Karla Souza, Raiana Laís Donato e Samara Petrilly</p>
                    </div>
                </div>

                {/* Projeto DS - OdontoSUS */}
                <div className={styles.card}>
                    <div className={styles.projectHeader}>
                        <span className={styles.iconDot}></span>
                        <h2>Protótipo - OdontoSUS (DS - Desenvolvimento de Software)</h2>
                    </div>
                    
                    <h3>Sobre o Projeto</h3>
                    <p>Este projeto foi desenvolvido como um dos requisitos para a conclusão da disciplina Desenvolvimento de Software.</p>

                    <h3>Sobre o Site</h3>
                    <p>Sistema web para auxiliar os profissionais e estudantes da CEO (clínica escola do Hospital Odontológico da UFPE) a automatizar a coleta e envio de dados para o SUS (BPA), melhorando a eficiência administrativa.</p>

                    <div className={styles.imageGallery}>
                        <img src="/~rlpd/assets/odonto-1.jpeg" alt="OdontoSUS Print 1" className={styles.projectImg} />
                        <img src="/~rlpd/assets/odonto-2.jpeg" alt="OdontoSUS Print 2" className={styles.projectImg} />
                    </div>

                    <div className={styles.techSection}>
                        <h3>Tecnologias Utilizadas</h3>
                        <div className={styles.tags}>
                            <span>Lovable</span> <span>Vite</span> <span>TypeScript</span> <span>React</span>
                        </div>
                    </div>

                    <div className={styles.footerInfo}>
                        <div className={styles.links}>
                            <a href="https://preview--bpa-prototipo.lovable.app/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>Protótipo Lovable</a>
                            <a href="https://github.com/raianalais/Odonto_cin.git" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>GitHub</a>
                        </div>
                        <h3>Equipe</h3>
                        <p className={styles.team}>Ana Clara Bizarria, Byanca Hayally Souza, Layse Gomes, Maria Cláudia Rocha, Jaianny Karla Souza, Raiana Laís Donato e Samara Petrilly</p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Portfolio;