const APP_STORE_URL = '#';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#F7F6F3',
      color: '#171717',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <section style={{
        maxWidth: 760,
        width: '100%',
        background: '#FFFFFF',
        borderRadius: 32,
        padding: '56px 32px',
        textAlign: 'center',
        boxShadow: '0 24px 80px rgba(0,0,0,0.08)',
        border: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🦫</div>

        <p style={{
          color: '#7F77DD',
          fontWeight: 800,
          letterSpacing: 1.2,
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>
          Coming Soon
        </p>

        <h1 style={{
          fontSize: 'clamp(44px, 8vw, 84px)',
          lineHeight: 0.95,
          margin: 0,
          letterSpacing: -3,
        }}>
          Vocabara™
        </h1>

        <h2 style={{
          fontSize: 'clamp(24px, 4vw, 42px)',
          lineHeight: 1.1,
          marginTop: 18,
          marginBottom: 20,
          letterSpacing: -1.5,
        }}>
          The Operating System for Language Learners.
        </h2>

        <p style={{
          fontSize: 20,
          lineHeight: 1.55,
          color: '#666',
          maxWidth: 620,
          margin: '0 auto 34px',
        }}>
          Look up words instantly, build your personal vocabulary bank, review smarter with spaced repetition, and improve through AI tutoring, speaking practice, and immersive roleplay.
        </p>

        <a
          href={APP_STORE_URL}
          style={{
            display: 'inline-block',
            background: '#7F77DD',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: 18,
            padding: '16px 28px',
            borderRadius: 18,
          }}
        >
          Get The App Today
        </a>

        <p style={{ margin: '16px 0 0' }}>
          <a
            href="mailto:support@getvocabara.com"
            style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: 14,
            }}
          >
            Contact Support
          </a>
        </p>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <div style={{
          marginTop: 48,
          paddingTop: 28,
          borderTop: '1px solid rgba(0,0,0,0.07)',
        }}>
          <p style={{ margin: '0 0 4px', fontWeight: 700, fontSize: 16, color: '#171717', letterSpacing: -0.3 }}>
            Vocabara™
          </p>
          <p style={{ margin: '0 0 16px', fontSize: 13, color: '#888' }}>
            The Operating System for Language Learners.
          </p>
          <p style={{ margin: '0 0 6px', fontSize: 13, color: '#888' }}>
            <a href="https://getvocabara.com" style={{ color: '#7F77DD', textDecoration: 'none', fontWeight: 600 }}>
              getvocabara.com
            </a>
            {' · '}
            <a href="mailto:support@getvocabara.com" style={{ color: '#7F77DD', textDecoration: 'none', fontWeight: 600 }}>
              support@getvocabara.com
            </a>
          </p>
          <p style={{ margin: 0, fontSize: 12, color: '#bbb' }}>
            © 2026 Superbury LLC. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
