module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFBEB", // gold-50
          100: "#FEF3C7", // gold-100
          200: "#FDE68A", // gold-200
          300: "#FCD34D", // gold-300
          400: "#FBBF24", // gold-400
          500: "#D4AF37", // gold-500 - Championship gold
          600: "#B8860B", // gold-600
          700: "#9A7B0A", // gold-700
          800: "#7C6309", // gold-800
          900: "#654F07", // gold-900
          DEFAULT: "#D4AF37", // gold-500
        },
        secondary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800 - Royal blue
          900: "#1E40AF", // blue-900
          DEFAULT: "#1E3A8A", // blue-800
        },
        accent: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600 - Manchester red
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
          DEFAULT: "#DC2626", // red-600
        },
        background: "#FEFEFE", // gray-50 - Pure canvas
        surface: "#F8FAFC", // slate-50 - Subtle depth
        text: {
          primary: "#1F2937", // gray-800 - Reading comfort
          secondary: "#6B7280", // gray-500 - Clear hierarchy
        },
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600 - Positive moments
          DEFAULT: "#059669", // emerald-600
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600 - Attention without alarm
          DEFAULT: "#D97706", // amber-600
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600 - Helpful guidance
          DEFAULT: "#DC2626", // red-600
        },
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        accent: ['Oswald', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      fontWeight: {
        'playfair-normal': '400',
        'playfair-bold': '700',
        'inter-normal': '400',
        'inter-medium': '500',
        'inter-semibold': '600',
        'oswald-medium': '500',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'dramatic': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      transitionDuration: {
        'smooth': '300ms',
        'reveal': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
        'reveal': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}