/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
          dark: '#0a0a0a',
          darker: '#050505',
          light: '#e0e0e0',
          gold: '#ffd700',
          orange: '#ff6b35',
          purple: '#8b5cf6',
          green: '#10b981',
          red: '#ef4444',
        },
        medieval: {
          gold: '#ffd700',
          bronze: '#cd7f32',
          silver: '#c0c0c0',
          crimson: '#dc143c',
          royal: '#4169e1',
          forest: '#228b22',
        }
      },
      fontFamily: {
        cyber: ['Orbitron', 'monospace'],
        medieval: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)',
        'medieval-gradient': 'linear-gradient(45deg, #ffd700, #ff6b35, #f7931e)',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #0a0a0a)',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.1)',
        'cyber-strong': '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)',
        'medieval': '0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 107, 53, 0.1)',
      },
      animation: {
        'pulse-cyber': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 2s infinite',
        'data-flow': 'dataFlow 3s infinite',
      }
    },
  },
  plugins: [],
};