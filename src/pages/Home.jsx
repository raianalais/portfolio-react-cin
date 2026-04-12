import React from "react"; 
import styles from './Home.module.css'; //Importação do CSS Modules para escopo local de estilos
import fotoPerfil from '../assets/perfil.jpeg'; //Importação imagem de perfil da pasta assets
import { Link } from 'react-router-dom';

// Objeto contendo as informações que serão renderizadas na página
// Centralizar os dados aqui facilita a manutenção futura

function Home() {
    const dados = {
        nomeCompleto: "Raiana Laís Pereira Donato",
        apresentacao: "Técnica em Desenvolvimento de Sistemas e estudante de graduação em Sistemas de Informação, com foco em desenvolvimento de software e design de interfaces.",
        instituicao: "CIN-UFPE",
        curso: "Sistemas de informação",
        interesses: [
            "Desenvolvimento Web", "Desenvolvimento Full Stack", "Desenvolvimento Mobile", "Design de Interface(UI/UX)", "Desenvolvimento de Jogos"
        ],
        contato: {
            email: "rlpd@cin.ufpe.br",
            github: "raianalais"
        }
    };

    return (
        <div className={styles.container}>
            <section className={styles.mainSection}>

            {/* Cabeçalho: Agrupa Foto, Informações Principais e Menu de Navegação */}
                <div className={styles.headerContent}>
                    <div className={styles.leftHeader}>
                        <img src={fotoPerfil} alt="Foto de Perfil" className={styles.perfilFoto} />
                        
                        <div className={styles.textHeader}>
                            <h1 className={styles.nome}>{dados.nomeCompleto}</h1>
                            <p className={styles.info}>{dados.curso} | {dados.instituicao}</p>
                            
                            <nav className={styles.navMenu}>
                                <Link to="/sobre" className={styles.navButton}>
                                    <span className={styles.iconDot}></span> SOBRE
                                </Link>
                                <Link to="/portfolio" className={styles.navButton}>
                                    <span className={styles.iconDot}></span> PORTFÓLIO
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Linha divisória para separar o cabeçalho do conteúdo principal */}
                <hr className={styles.divider}/>

                {/* Descrição curta do perfil acadêmico */}
                <div className={styles.content}>
                    <p>{dados.apresentacao}</p>

                    {/* Mapeamento da lista de interesses*/}
                    <h3 className={styles.subTitle}>Interesses Acadêmicos</h3>
                    <ul className={styles.list}>
                        {dados.interesses.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* Seção de Contatos com links externos */}
                    <h3 className={styles.subTitle}>Contatos</h3>
                    <div className={styles.contactBox}>
                        {/* Link de e-mail usando o protocolo mailto */}
                         <a href={`mailto:${dados.contato.email}`} className={styles.contactItem}>
                            <span className={styles.iconDot}></span> {dados.contato.email}
                         </a>
                         {/* Link para o GitHub - target="_blank" abre em nova aba */}
                         <a href={`https://github.com/${dados.contato.github}`} target="_blank" rel="noreferrer" className={styles.contactItem}>
                            <span className={styles.iconDot}></span> GitHub
                         </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;