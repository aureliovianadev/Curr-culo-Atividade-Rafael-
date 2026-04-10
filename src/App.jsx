import './App.css'

function App() {
  return (
    <main className="resume-page">
      <div className="resume-card">
        <header className="resume-header">
          <p className="resume-subtitle">Curriculo</p>
          <h1>Daniela Cristina Cunha Conduta</h1>
        </header>

        <div className="resume-meta">
          <p><span>Cargo:</span> Desempregada</p>
          <p><span>Cidade:</span> Igaraçu do tiete-SP</p>
          <p><span>Email:</span> danifaznada@email.com</p>
        </div>

        <p className="resume-note">17 anos existindo</p>

        <section className="resume-section">
          <h2>Habilidades</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Experiências</h2>
          <ul>
            <li>Dorminhoca  (18 anos)</li>
            <li>Louça mal lavada(17 anos)</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Línguas</h2>
          <ul>
            <li>Portuguese</li>
            <li>Tenta Portugues</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default App
