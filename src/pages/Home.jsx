import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to <span className="highlight">EchoBox</span></h2>
        <p>
          Send meaningful messages to your future self. Create echoes through time that remind you of who you were, who you are, and who you want to become.
        </p>
        <button onClick={() => navigate('/message')}>Write a Message</button>
      </section>

      <section className="home features">
        <article className="feature-card">
          <div className="feature-icon">📨</div>
          <h3>Write to yourself</h3>
          <p>
          Capture your thoughts, dreams, and reflections in messages meant
          for your future self.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">🕒</div>
          <h3>Schedule Delivery</h3>
          <p>
            Choose when your messages unlock—weekly, monthly, yearly, or on
            a specific date.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">💜</div>
          <h3>Rediscover Joy</h3>
          <p>
            Receive your messages as gifts from the past, reminding you of
            your journey.
          </p>
        </article>
      </section>
    </div>
    
  )
}
