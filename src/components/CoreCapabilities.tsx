import './CoreCapabilities.css'

function CoreCapabilities() {
  return (
    <section id="capabilities" className="capabilities">
      <div className="capabilities-container">
        <h2 className="section-title">Core Capabilities</h2>
        <div className="capabilities-content">
          <div className="capability-item">
            <h3 className="capability-title">LLM Training Data</h3>
            <p className="capability-description">
              Instruction-following datasets that connect language to physical actions. 
              Agent coordination data for multi-agent systems. Reasoning datasets that 
              incorporate spatial and temporal understanding.
            </p>
          </div>
          <div className="capability-item">
            <h3 className="capability-title">Computer Vision Datasets</h3>
            <p className="capability-description">
              Perception datasets for object recognition, scene understanding, and spatial reasoning. 
              Navigation datasets covering diverse environments and conditions. Real-world imagery 
              annotated for Physical AI applications.
            </p>
          </div>
          <div className="capability-item">
            <h3 className="capability-title">Speech & Audio Data</h3>
            <p className="capability-description">
              High-quality speech synthesis datasets with natural prosody and intonation. 
              Audio intelligence datasets for environmental sound recognition and spatial audio understanding. 
              Multilingual and accent-diverse training data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreCapabilities


