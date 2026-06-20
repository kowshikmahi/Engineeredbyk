import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">ABOUT ME</p>
        <h2>Engineer by degree. Developer by obsession.</h2>
      </motion.div>

      <motion.div
        className="glass about-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>
          I’m <span className="highlight">Kowshik Mahendran</span>, a BE
          Mechatronics student with a strong interest in web development,
          automation, embedded ideas, and building products that feel both smart
          and useful. I enjoy blending engineering logic with creative UI design.
        </p>

        <p>
          My work ranges from <span className="highlight">portfolio websites</span>,
          AI-assisted web projects, and full-stack development to
          robotics-based builds like line followers, gesture control systems, and
          healthcare-focused concepts like a portable IOP monitoring device.
        </p>

        <p>
          Think of my workflow like a crossover between <span className="highlight">Batman’s discipline</span>,
          <span className="highlight"> Iron Man’s engineering energy</span>,
          <span className="highlight"> Spider-Man’s agility</span>, and just a little
          bit of <span className="highlight">Tyler Durden chaos</span> for creative risk.
        </p>
      </motion.div>
    </section>
  );
}