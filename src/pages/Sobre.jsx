import React from 'react';
import styles from './Sobre.module.css';
import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/" className={styles.backLink}>← Voltar para Home</Link>
                <h1 className={styles.title}>Sobre Mim</h1>
            </header>

            <section className={styles.content}>
                <div className={styles.card}>
                    <h2>Trajetória Acadêmica</h2>
                    <p>Minha trajetória acadêmica começou ainda no ensino médio, quando ingressei na Escola Técnica Estadual (ETE), onde me formei como técnica em Desenvolvimento de Sistemas. Durante esse período, tive meu primeiro contato mais aprofundado com a área de tecnologia, aprendendo desde lógica de programação até desenvolvimento web e noções de design de interfaces. Foi nessa fase que comecei a entender melhor minhas afinidades dentro da área de TI e a desenvolver projetos que contribuíram bastante para o meu crescimento.
                    A experiência na ETE foi essencial não só pelo conhecimento técnico, mas também por me aproximar de situações mais próximas do mercado, como trabalho em equipe, organização de projetos e resolução de problemas. Ao longo do curso, fui percebendo meu interesse por áreas como desenvolvimento web, UX/UI design e também outras possibilidades dentro da tecnologia, o que ampliou minha visão sobre o que eu poderia seguir profissionalmente.
                    Atualmente, estou cursando Sistemas de Informação no Centro de Informática da UFPE, onde continuo aprofundando meus conhecimentos e explorando ainda mais o universo da tecnologia. A graduação tem sido uma oportunidade importante para consolidar minha base teórica e prática, além de me desafiar a aprender constantemente e acompanhar as evoluções da área.</p>
                </div>

                <div className={styles.card}>
                    <h2>Interesses em Tecnologia</h2>
                    <p> Tenho foco na área de desenvolvimento web, com objetivo de atuar como desenvolvedora full stack. No front-end, busco trabalhar com tecnologias como HTML, CSS, JavaScript e React, voltadas para a criação de interfaces modernas, responsivas e eficientes.
No back-end, procuro desenvolver conhecimentos relacionados à lógica de programação, construção de APIs e integração entre sistemas, visando a criação de aplicações completas.
A área de UX/UI design também faz parte dos meus interesses, utilizando ferramentas como Figma para projetar interfaces intuitivas e centradas no usuário.
Além disso, busco explorar o desenvolvimento mobile e o desenvolvimento de jogos, ampliando minhas habilidades e unindo criatividade com tecnologia na criação de soluções interativas.</p>
                </div>

                <div className={styles.card}>
                    <h2>Objetivos Profissionais</h2>
                    <p>Meu objetivo profissional é crescer na área de tecnologia, buscando constantemente evolução tanto técnica quanto pessoal. Pretendo adquirir experiência prática por meio de estágios e projetos, aplicando os conhecimentos que venho desenvolvendo ao longo da minha formação.
A curto prazo, busco uma oportunidade de estágio que me permita aprender com profissionais da área, entender melhor o funcionamento do mercado e desenvolver minhas habilidades em um ambiente real de trabalho.
A longo prazo, desejo me consolidar como uma profissional qualificada, capaz de contribuir em projetos relevantes, trabalhando em equipe e desenvolvendo soluções eficientes. Também pretendo continuar me atualizando e aprendendo novas tecnologias, acompanhando as constantes mudanças da área.</p>
                </div>
            </section>
        </div>
    );
}

export default Sobre;