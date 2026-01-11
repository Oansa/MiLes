import './WhatWeDo.css'

function WhatWeDo() {
  return (
    <section id="what-we-do" className="what-we-do">
      <div className="what-we-do-container">
        <h2 className="section-title">What We Do</h2>
        <div className="what-we-do-content">
          <p className="large-text">
            MiLes provides high-quality, large-scale training data for Physical AI systems. 
            We build the data pipelines that power robots, drones, autonomous systems, and embodied agents.
          </p>
          <div className="what-we-do-grid">
            <div className="what-we-do-item">
              <h3>Data Design</h3>
              <p>
                We architect datasets that capture the complexity of real-world environments, 
                ensuring Physical AI systems learn from data that reflects actual operational conditions.
              </p>
            </div>
            <div className="what-we-do-item">
              <h3>Collection & Curation</h3>
              <p>
                Large-scale data collection across diverse scenarios, followed by rigorous curation 
                to maintain quality and relevance for training robust models.
              </p>
            </div>
            <div className="what-we-do-item">
              <h3>Multimodal Datasets</h3>
              <p>
                We deliver integrated datasets spanning vision, language, and audio modalities—the 
                foundation required for systems that perceive, reason, and interact in physical space.
              </p>
            </div>
            <div className="what-we-do-item">
              <h3>Validation</h3>
              <p>
                Every dataset undergoes systematic validation to ensure it meets the standards 
                required for production Physical AI deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo


