import React from 'react'
// import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
// import project3 from '../assets/img/project3.png'
import project4 from '../assets/img/project4.png'
import project5 from '../assets/img/project5.png'
// import project6 from '../assets/img/project6.png'
import project7 from '../assets/img/project7.png'
import project8 from '../assets/img/project8.png'
import project9 from '../assets/img/project9.png'
import project10 from '../assets/img/project10.png'
import project11 from '../assets/img/project11.png'
import Bankbackend from '../assets/img/project11.png'
import more_project from '../assets/img/more_project.png'

const Project = ({ data }) => {

    const projects = [
        // {
        //     id: 1,
        //     name: "Local Media Flix",
        //     image: project1,
        //     github: `${data.github}/Local-Media-Flix`
        // },
        // {
        //     id: 8,
        //     name: "Bank System",
        //     image: Bankbackend,
        //     github: `${data.github}/bank-system`
        // },
        // {
        //     id: 9,
        //     image: project9,
        //     github: `${data.github}/CineScope`
        // },
        // {
        //     id: 11,
        //     image: Bankbackend,
        //     github: `${data.github}/bank-system `
        // },
        // {
        //     id: 2,
        //     image: project2,
        //     github: `${data.github}/Jokes-API-Project`
        // },
        // {
        //     id: 7,
        //     image: project7,
        //     github: `${data.github}/Cryptobash`
        // },
        // {
        //     id: 10,
        //     image: project10,
        //     github: `${data.github}/Task-Management-App`
        // },
        // {
        //     id: 4,
        //     image: project4,
        //     github: `${data.github}/Ecommerce-KartoonShop-master`
        // },
        // {
        //     id: 5,
        //     image: project5,
        //     github: `${data.github}/iNotebook`
        // },
        // // {
        // //     id: 6,
        // //     image: project6,
        // //     github: `${data.github}/QuizApplication`
        // // },
        // {
        //     id: 15,
        //     image: more_project,
        //     github: `${data.github}`
        // },
    ]

    return (
        <section className="project section" id="project">
            <h2 className="section-title">Project</h2>

            <div className="project__container bd-grid">
                {
                    projects.map((project) => {
                        return (
                            <a href={project.github} rel="noreferrer" target="_blank" className="project__img" key={project.id}
                                data-aos="zoom-in"
                                data-aos-offset="200"
                                data-aos-duration="1000">
                                <img src={project.image} alt="" />
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project