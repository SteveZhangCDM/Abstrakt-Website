import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import teamPhoto from "../../assets/images/team_photo.JPG";
import Quote from "../../components/Typography/Quote.js";

const useStyles = makeStyles(styles);

const AboutPage = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.section}>
                <div className={classes.container}>
                    <GridContainer>
                        <div className={classes.typo}>
                            <h1 className={classes.title}>VR Holocaust Memorial with Zeros2Heroes</h1>
                        </div>
                    </GridContainer>
                </div>
                <GridContainer>
                    <GridItem xs={12} sm={6} className={classes.container}>
                        <img
                            src={teamPhoto}
                            alt="..."
                            className={
                                classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid
                            }
                        />
                        <div>
                            <h1 className={classes.title}>
                                Project Description
                            </h1>
                            <p>
                                Our project surrounds recreating the Berlin Holocaust Memorial (Holocaust-Mahnmal) in a Virtual Reality space.
                                Focused on teenage users in North America, this project aims to show the experience and weight of the Holocaust
                                to young users familiar with technology. By recreating the Holocaust Memorial in Virtual Reality space, this project
                                aims to bring moving and poignant emotion to users who may not have the opportunity to experience the memorial in person.
                            </p>
                        </div>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem className={classes.container}>
                        <h2 className={classes.title}>
                            Anastassiya Zyablova
                        </h2>
                        <h3 className={classes.title}>
                            Role: 3D/Environmental Design
                            </h3>
                        <p>Anastassiya Zyablova is an experienced Architect with a Bachelor’s degree in Architecture from Technion-Israel Institute of Technology. 
                            For this project, Anastassiya used her space design and 3D skills to produce textures, atmospheric light and visual effects in unity. 
                            In addition she used her new acquired UX skills to provide a user friendly, unique experience.
                        </p>
                        <Quote
                            text="Working on ABSTRAKT was a great and exciting experience for me. I’ve learned what it’s like to work on a VR project of 
                            such scale in unity, how to develop and put on hold great ideas and most importantly how to communicate and work with people 
                            from so many different and amazing backgrounds. As someone who comes from Israel working on a project that educates and brings the 
                            stories of the Holocaust forward was ecpecially important to me. Excited to see where it will go in the future!
                            "
                        />
                    </GridItem>
                    <GridItem className={classes.container}>
                        <h2 className={classes.title}>
                            Eugenia Orozco
                            </h2>
                        <h3 className={classes.title}>
                            Role: 3D Animator/Lighting Design
                            </h3>
                        <p>Eugenia Orozco is an experienced 3D animator with a Bachelor’s degree in Animation and Digital Art and a post-secondary degree 
                            in 3D Animation and Visual Effects from Vancouver Film School, where she graduated with honours. For this project, Eugenia brought 
                            her 3D experience and worked on lighting in Unity, as well as creating the cinematic in Maya with the purpose of helping advertise 
                            this project. 
                            </p>
                            <Quote
                            text="I’m so thankful to have been given the opportunity to work on Abstrakt, as it allowed me to learn new things, 
                            like how to use Unity, and it gave me the opportunity to learn so much from my teammates and peers. I’m excited to see how this 
                            project keeps evolving, and I’m extremely proud to have been a part of it."
                            />
                    </GridItem>
                    <GridItem className={classes.container}>
                        <h2 className={classes.title}>
                            Isabel Hughes
                            </h2>
                        <h3 className={classes.title}>
                            Role: Project Manager/Sound Design
                            </h3>
                        <p>Isabel Hughes is an award-winning multidisciplinary graphic designer with a background in advertising and campaigns for social change. 
                            She holds a First Honours Bachelor of Arts from the University of Gloucestershire, specializing in design. For this project, she led 
                            the team in research and discovery, working with her colleagues at the CDM to create a robust proof-of-concept for ABSTRAKT. 
                            Within this project, Isabel composed several soundtracks and designed ambient sound for use in the Virtual Reality space.
                            </p>
                        <Quote
                            text="Working on ABSTRAKT was a wonderful experience to learn what it is like to design and create in Virtual Reality 
                            while managing a highly interdisciplinary team. It is a wonderful project and I am very proud to have been a part of it! 
                            After visiting the Berlin Memorial myself in 2018, I understand how important this project is. Can’t wait to see where it goes 
                            in the future.
                            "
                        />
                    </GridItem>
                    <GridItem className={classes.container}>
                        <h2 className={classes.title}>
                            Jian Shi
                            </h2>
                        <h3 className={classes.title}>
                            Role: 2D Conecpt Artist
                            </h3>
                        <p>Jian received his Bachelor of Graphic Design Degree at the Luxun Academy of Fine Arts in China and then received his Master of Design Degree at
                        the University of New South Wales located in Sydney, Australia. In addition, Jian completed an Art & Media program at the University of Salford in 2014.
                        He gained valuable graphic design and critical thinking skills. His studies focused primarily on graphic design, 2D illustration and concept art.
                            </p>

                        <p>After his Masters Degree he worked as a graphic designer in Sydney. His clients included Union Pay, Hikvision, ICBC, Greenland Real Estate and many other
                        local and international companies. He also provided illustration services to Arc'tyrex, Outdoor Magazine and many books and shopping malls as a freelance
                        contractor.
                            </p>
                        <Quote
                        text="I am honored to participate in this VR experience project and work with these excellent teammates. 
                        This project has profound educational significance, and in the process of working, I have learned more about the process and details 
                        of the Jewish Holocaust. At the same time, I learned a lot from my teammates. I hope that in the future, this VR experience project can 
                        affect many people, make more teenagers understand the Jewish Holocaust, let people face history, and cherish peace more.
                        "
                        />

                    </GridItem>
                    <GridItem className={classes.container}>
                        <h2 className={classes.title}>
                            Matthew Shin
                            </h2>
                        <h3 className={classes.title}>
                            Role: Software Developer
                            </h3>
                        <p>Matthew is a 4th year BCS student from UBC, expecting to graduate in May of 2020. Matthew completed his first degree as a Psychology major back in 2016 and his
                        passion for technology drove him to apply to the BCS program at UBC for his second degree. Matthew's interest and passion for tech started when he worked for Apple
                        as a Retail employee troubleshooting and repairing computers. During his time as a BCS student, he worked for Sophos, a cyber-security company, for his 4-month co-op.
                            </p>
                        <Quote
                            text="Working on this project this term has given me a lot of great learning opportunity, not only a chance to learn Unity from scratch, but also how to best work with an
                                interdisciplinary team. I'm excited to start my career as a developer and apply the foundations of what I have learned this term."
                        />

                    </GridItem>
                    <GridItem className={classes.container}>
                        <h2 className={classes.title}>
                            Wentao (Steve) Zhang
                            </h2>
                        <h3 className={classes.title}>
                            Role: Software Developer
                            </h3>
                        <p>Steve is an experienced programmer and earned a Bachelor's degree in Software Engineering. 
                            He is fluent in a variety of computer languages and delivered new and innovative solutions. Steve looks forward
                             to working in a tech company with Agile and collaborating with like-minded people and expanding his professional skills. 
                             For this project, Steve brought his experience in Unity and user-centred thinking into ABSTRAKT. He organized the project and 
                             helped his team to solve the problems
                            </p>
                        <Quote
                            text="I gained a lot of treasured experience in this project, including controlling version, bug-solving and working with Oculus OVR. 
                            I can’t wait to apply what I learned into my career, and I do believe there are far, far better things ahead than any we leave behind."
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </>
    )

}

export default AboutPage;