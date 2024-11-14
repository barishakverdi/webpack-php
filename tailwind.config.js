import isBrowser from '@igorkowalczyk/is-browser';
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
    content: ['./src/**/*.{php,js}', './*.php', './doktor/**/*.php', './includes/**/*.php', './public/**/*.html'],
    theme: {
        screens: {
            'min-3xl': {'min': '1681px'},
            'min-2xl': {'min': '1441px'},
            'min-xl': {'min': '1281px'},
            'min-lg': {'min': '1025px'},
            'min-md': {'min': '769px'},
            'min-sm': {'min': '577px'},
            '3xl': {'max': '1680px'},
            '2xl': {'max': '1440px'},
            'xl': {'max': '1280px'},
            'lg': {'max': '1024px'},
            'md': {'max': '768px'},
            'sm': {'max': '576px'},
        },
        colors: {
            emerald: null,
            indigo: null,
            yellow: null,
            amber: null,
            red: null,
            orange: null,
            lime: null,
            green: null,
            teal: null,
            sky: null,
            cyan: null,
            blue: null,
            violet: null,
            purple: null,
            fuchsia: null,
            pink: null,
            slate: null,
            gray: null,
            zinc: null,
            neutral: null,
            stone: null,
            rose: null,
        },
        container: {
            center: true,
            padding: 24
        },
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'black': '#000000',
                'primary': {
                    DEFAULT: '#2E4074',
                    '50': '#EEF1F8',
                    '100': '#CDD5EB',
                    '200': '#ACB9DE',
                    '300': '#8B9DD1',
                    '400': '#6A81C4',
                    '500': '#4965B6',
                    '600': '#3B5295',
                    '700': '#2E4074',
                    '800': '#212E53',
                    '900': '#141B32',
                    '950': '#070911'
                },
                'secondary': {
                    DEFAULT: '#B149E4',
                    '50': '#F6EBFC',
                    '100': '#E5C2F6',
                    '200': '#D49AF0',
                    '300': '#C272EA',
                    '400': '#B149E4',
                    '500': '#A021DE',
                    '600': '#821BB6',
                    '700': '#65158D',
                    '800': '#480F65',
                    '900': '#2B093D',
                    '950': '#0E0314'
                },
                'gray': {
                    DEFAULT: '#ADB5BD',
                    '50': '#F8F9FA',
                    '100': '#E9ECEF',
                    '200': '#DEE2E6',
                    '300': '#CED4DA',
                    '400': '#ADB5BD',
                    '500': '#6C757D',
                    '600': '#495057',
                    '700': '#343A40',
                    '800': '#212529',
                    '900': '#1B1D20',
                    '950': '#121314'
                }
            },
            fontFamily: {
                sans : ['Figtree', 'sans-serif']
            },
            container: {
                center: true,
                padding: "24px",
            },
            borderRadius: {
                xl: '20px',
                lg: '12px'
            },
            opacity: generateOpacityRange(1, 100),
            zIndex: generateZIndexRange(1, 100),
            transitionDuration: generateTransitionDurationRange(100, 1000),
            transitionDelay: generateDelayRange(100, 1000),
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9',
                unset: 'unset',
            },
            keyframes: {
                gradient: {
                    'from': { backgroundPosition: '0 50%' },
                    'to': { backgroundPosition: '200% 50%'},
                },
                shadowPulse: {
                    from: { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.2)"},
                    "70%": { boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)"},
                    to: { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)"}
                }
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                "shadowPulse": "shadowPulse 2s infinite",
            },
        },
    },
    plugins: [
        isBrowser,
        tailwindScrollbar({ preferredStrategy: 'pseudoelements', nocompatible: true })
    ],
};

// Generate Opacities
function generateOpacityRange(start, end) {
    const opacityRange = {};
    for (let i = start; i <= end; i++) {
        opacityRange[i] = (i / 100).toString();
    }
    return opacityRange;
}

// Generate z-indexes
function generateZIndexRange(start, end) {
    const zIndexRange = {};
    for (let i = start; i <= end; i++) {
        zIndexRange[i] = i.toString();
    }
    return zIndexRange;
}

// Generate Transition Durations
function generateTransitionDurationRange(start, end) {
    const transitionDurationRange = {};
    for (let i = start; i <= end; i += 50) {
        transitionDurationRange[i] = (i + "ms").toString();
    }
    return transitionDurationRange;
}

// Generate Transition Delays
function generateDelayRange(start, end) {
    const delayRange = {};
    for (let i = start; i <= end; i += 50) {
        delayRange[i] = (i + "ms").toString();
    }
    return delayRange;
}
