import React from 'react'
import image from '../assets/img/bg-4.jpg'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="biography">
          <h1>Biography</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint odio
            ipsam, ducimus sed doloribus ratione? Corrupti vero, dolorum, quam
            quae enim illum saepe, facere consectetur aspernatur laudantium
            magni nobis iusto! Reprehenderit nemo nam, possimus facere odit
            eaque distinctio sit asperiores repellat necessitatibus molestiae
            magnam aut reiciendis doloribus quo a aliquid, voluptates vero
            aspernatur aliquam ipsa. Rem officia impedit consectetur dolorem!
            Fugit pariatur perspiciatis sequi, dicta quo incidunt expedita
            possimus ipsam, obcaecati non delectus aspernatur cumque enim
            deleniti aliquam repellendus natus accusantium necessitatibus porro
            quam. Animi tempora quas consectetur harum commodi?!
            <br />
            <br />
            possimus ipsam, obcaecati non delectus aspernatur cumque enim
            deleniti aliquam repellendus natus accusantium necessitatibus porro
            quam. Animi tempora quas consectetur harum commodi?!
          </p>
        </div>
        <div className="about-img">
          <img src={image} alt="" />
        </div>
      </div>
      <h4 className="p-h4">&copy; 2023 By Hitesh</h4>
    </>
  );
}

export default About