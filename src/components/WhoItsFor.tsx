import './WhoItsFor.css'

function WhoItsFor() {
  return (
    <section id="who-its-for" className="who-its-for">
      <div className="who-its-for-container">
        <h2 className="section-title">Who It's For</h2>
        <div className="who-its-for-content">
          <div className="who-grid">
            <div className="who-item">
              <h3>Robotics Companies</h3>
              <p>
                Production robotics teams building systems that operate in warehouses, factories, 
                and real-world environments require reliable training data at scale.
              </p>
            </div>
            <div className="who-item">
              <h3>Autonomous Systems & Drones</h3>
              <p>
                Teams developing autonomous vehicles, delivery systems, and aerial platforms 
                need multimodal datasets that reflect operational conditions.
              </p>
            </div>
            <div className="who-item">
              <h3>Physical AI Research Labs</h3>
              <p>
                Academic and industrial research groups pushing the boundaries of embodied intelligence 
                require high-quality datasets for reproducible experiments.
              </p>
            </div>
            <div className="who-item">
              <h3>Applied AI Startups</h3>
              <p>
                Startups building Physical AI products need infrastructure-grade data pipelines 
                to move from prototype to production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoItsFor


