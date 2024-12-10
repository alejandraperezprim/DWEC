import React from 'react';
import './AboutMe.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function AboutMe() {
    return (
        <div className="about-me-container">

            {/* Foto */}
                <div className="about-me-photo">
                    <img
                    src={`${process.env.PUBLIC_URL}/assets/my-photo.jpg`}
                    alt="Mi Foto"
                    />
                </div>

            <div className="col-md-6">
                <h1>¡Hola! Soy Alejandra</h1>
                <p>
                    Diseñadora de producto en transición al mundo de la programación. 
                    Mi pasión por crear experiencias de usuario atractivas y funcionales me ha llevado
                    a explorar el desarrollo web, donde busco combinar mi conocimiento en diseño con nuevas habilidades técnicas.
                    Estoy en constante aprendizaje, enfocada en la creación de soluciones eficientes y accesibles.
                </p>
                <p>
                    En mi tiempo libre, disfruto explorar nuevas tendencias en diseño,
                    leer sobre tecnologías emergentes y realizar actividades creativas como la fotografía y la ilustración.
                </p>

                {/* enlaces GitHub y LinkedIn */}
                <div className="mt-4">
                    <a href="https://github.com/tuusuario" className="btn btn-dark me-2" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/tuusuario" className="btn btn-linkedin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> LinkedIn
                    </a>

                </div>
                

                <div className="about-me-quote">
                    <blockquote>
                        "Un mago nunca llega tarde, ni pronto. Llega exactamente cuando se lo propone" 
                        <span>- Gandalf</span>
                    </blockquote>
                </div>

                <div className="about-me-skills">
                    <h2>Skills</h2>
                    <div className="skill-list">
                        <div className="skill">
                        <h4>HTML/CSS</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '83%' }}>83%</div>
                        </div>
                        </div>
                        <div className="skill">
                        <h4>JavaScript</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '10%' }}>10%</div>
                        </div>
                        </div>
                        <div className="skill">
                        <h4>React</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '30%' }}>30%</div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="about-me-timeline">
                    <h2>Trayectoria</h2>
                    <ul className="timeline">
                        <li>
                        <h4>2024 - Desarrollo de Aplicaciones Web</h4>
                        <p>Finalización del FP de DAW con un proyecto en React y PHP.</p>
                        </li>
                        <li>
                        <h4>2022 - Inicio de FP Superior</h4>
                        <p>Comienzo de mi formación en desarrollo web.</p>
                        </li>
                        <li>
                        <h4>2020 - Primeros pasos en programación</h4>
                        <p>Aprendí los fundamentos de HTML y CSS creando mis primeros sitios web.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
