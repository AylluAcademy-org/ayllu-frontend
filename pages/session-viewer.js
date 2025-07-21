import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function SessionViewer() {
  const router = useRouter()
  const { sessionId } = router.query
  const [session, setSession] = useState(null)

  useEffect(() => {
    if (sessionId) {
      // ⚠️ Ajusta esta URL a tu backend real
      fetch(`http://localhost:3001/api/lessons/${sessionId}`)
        .then(res => res.json())
        .then(data => setSession(data))
        .catch(err => console.error('Error loading session:', err))
    }
  }, [sessionId])

  if (!session) return <p>Cargando sesión...</p>

  return (
    <div style={{ padding: '20px' }}>
      <h1>{session.name}</h1>

      {session.video && (
        <div style={{ marginTop: '20px' }}>
          {session.video.includes('youtube.com') ? (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe
                src={session.video.replace('watch?v=', 'embed/')}
                frameBorder="0"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '500px',
                  height: '280px',
                }}
              />
            </div>
          ) : (
            <video
              width="100%"
              style={{ maxHeight: '720px', borderRadius: '8px' }}
              controls
            >
              <source src={session.video} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          )}
        </div>
      )}




      {session.description && (
        <div style={{ marginTop: '20px' }}>
          <p>{session.description}</p>
        </div>
      )}
    </div>
  )
}
