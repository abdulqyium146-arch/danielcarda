import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/constants'

export const runtime = 'edge'
export const alt = `${SITE.name} — 24/7 Locksmith Sanford, FL`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #1D4ED8 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background pattern dots */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(220,38,38,0.2)',
            border: '1px solid rgba(220,38,38,0.4)',
            borderRadius: '9999px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#EF4444',
            }}
          />
          <span style={{ color: '#FCA5A5', fontSize: '18px', fontWeight: 600 }}>
            Available 24/7 — Fast Emergency Response
          </span>
        </div>

        {/* Logo area */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '24px',
          }}
        >
          {/* Shield icon */}
          <div
            style={{
              width: '72px',
              height: '72px',
              background: '#F59E0B',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
            }}
          >
            🔐
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '48px',
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              Daniel Cerda
            </span>
            <span
              style={{
                color: '#F59E0B',
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Locksmith
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#FFFFFF',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.3,
            marginBottom: '20px',
          }}
        >
          Sanford&apos;s Most Trusted Locksmith
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            color: '#CBD5E1',
            textAlign: 'center',
            marginBottom: '36px',
          }}
        >
          Licensed &amp; Insured · 20-Min Response · 4.9★ Rated
        </div>

        {/* Phone + address */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#F59E0B',
              color: '#0F172A',
              fontWeight: 800,
              fontSize: '26px',
              padding: '12px 32px',
              borderRadius: '12px',
            }}
          >
            {SITE.phone}
          </div>
          <span style={{ color: '#94A3B8', fontSize: '18px' }}>
            {SITE.address.city}, {SITE.address.state}
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
