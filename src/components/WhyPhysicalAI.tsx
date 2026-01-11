import './WhyPhysicalAI.css'

function WhyPhysicalAI() {
  return (
    <section id="why-physical-ai" className="why-physical-ai">
      <div className="why-physical-ai-container">
        <h2 className="section-title">Why Physical AI Needs MiLes</h2>
        <div className="why-physical-ai-content">
          <p className="large-text">
            Physical AI systems require three core capabilities: reasoning through language, 
            perceiving through vision, and interacting through speech. Each depends on high-quality, 
            real-world training data.
          </p>
          <div className="why-grid">
            <div className="why-item">
              <h3>Large Language Models</h3>
              <p>
                LLMs enable Physical AI to reason, follow instructions, and coordinate complex behaviors. 
                They require training data that connects language to physical actions and spatial understanding.
              </p>
            </div>
            <div className="why-item">
              <h3>Computer Vision</h3>
              <p>
                Vision systems must perceive, navigate, and understand environments. This demands 
                datasets that capture real-world scenes, objects, and spatial relationships at scale.
              </p>
            </div>
            <div className="why-item">
              <h3>Speech & Audio Intelligence</h3>
              <p>
                Human–machine interaction requires natural speech synthesis and audio understanding. 
                Training data must reflect diverse voices, accents, and real-world acoustic conditions.
              </p>
            </div>
          </div>
          <div className="bottleneck-section">
            <h3 className="bottleneck-title">The Data Bottleneck</h3>
            <p className="bottleneck-text">
              Data quality, scale, and real-world grounding are the primary bottlenecks preventing 
              Physical AI from reaching production readiness. MiLes exists to solve this.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyPhysicalAI

