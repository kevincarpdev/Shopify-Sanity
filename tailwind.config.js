module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      DEFAULT: '8px',
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '15px',
      xl: '20px',
      full: '9999px',
    },
    boxShadow: {
      DEFAULT: '0px 0px 4px rgba(0, 0, 0, 0.1)',
    },
    fontFamily: {
      sans: '"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    fontSize: {
      // 12px
      xs: [
        '0.75rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
      ],
      // 14px
      sm: [
        '0.875rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
      ],
      // 16px
      md: [
        '1rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
      ],
      //18px
      lg: [
        '1.125rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
      ],
      // 24px
      xl: [
        '1.5rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
      ],
      // 36px
      '2xl': [
        '2.25rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
      ],
      // 54px
      '3xl': [
        '3.375rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1',
        },
      ],
      // 74px
      '4xl': [
        '4.625rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1',
        },
      ],
      // 110px
      '5xl': [
        '6.875rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1',
        },
      ],
    },
    fontWeight: {
      bold: 700,
      medium: 500,
    },
    letterSpacing: {
      normal: '-0.03em',
    },
    lineHeight: {
      none: '1',
      caption: '1.25',
      paragraph: '1.6',
    },
    extend: {
      animation: {
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        darkGray: '#757575',
        gray: '#E7E7E7',
        lightGray: '#FFFFFC',
        offBlack: '#0E0F19',
        blue: '#4357AD',
        green: '#57886C',
        red: '#DD614A',
      },
      height: {
        'header-sm': '4.375rem',
        'header-lg': '6.25rem',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.75,
          },
        },
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px',
        16: '64px',
        17: '68px',
        18: '72px',
        19: '76px',
        20: '80px',
        21: '84px',
        22: '88px',
        23: '92px',
        24: '96px',
        25: '100px',
        26: '104px',
        27: '108px',
        28: '112px',
        29: '116px',
        30: '120px',
        31: '124px',
        32: '128px',
        33: '132px',
        34: '136px',
        35: '140px',
        36: '144px',
        37: '148px',
        38: '152px',
        39: '156px',
        40: '160px',
        overlap: '20px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [],
};
