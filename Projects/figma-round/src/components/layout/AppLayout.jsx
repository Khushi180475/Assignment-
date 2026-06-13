import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

export default function AppLayout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0a0a0c',
        position: 'relative',
      }}
    >
      <Sidebar />
      <div
        style={{
          flex: 1,
          height: '100%',
          background: 'transparent',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Figma Background Earth & Rectangle 14 Layer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          {/* Earth Image (image.png layout) */}
          <img
            src="/image.png"
            alt="Earth Globe"
            style={{
              position: 'absolute',
              width: '1107px',
              height: '618px',
              bottom: '-345px', // 1024 - 751 = 273px visible. 618 - 273 = 345px overflow.
              left: 'calc(50% - 553.5px)', // Center horizontally in the main area
              clipPath: 'circle(50% at 50% 100%)', // Mathematically key out the white background of the image
              opacity: 1,
            }}
          />

          {/* Rectangle 14 (Gradient overlay layout) */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '197px',
              background: 'linear-gradient(360deg, #101010 3.55%, rgba(16, 16, 16, 0) 70.79%)',
              opacity: 1,
            }}
          />
        </div>

        {/* Page Content Viewport */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  )
}
