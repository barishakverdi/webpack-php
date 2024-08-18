module.exports = {
    content: ['./src/**/*.{html,php,js}', './public/**/*.html'],
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
                'bodyBackgroundColor': '#fefefe',
                'white': '#ffffff',
                'black': '#000000',
                'cookie': '#000000',
                'primary': {
                    DEFAULT: '#7d91b3',
                    '50': '#f5f6fa',
                    '100': '#ebedf3',
                    '200': '#d2d8e5',
                    '300': '#abb8ce',
                    '400': '#7d91b3',
                    '500': '#5d739a',
                    '600': '#495b80',
                    '700': '#3c4a68',
                    '800': '#354057',
                    '900': '#1c212c',
                },
                'red': {
                    400: "#ef4950",
                    500: "#eb1c24",
                    600: "#bc161d",
                },
            },
            fontFamily: {
                sans : ['Inter Variable', 'sans-serif']
            },
            container: {
                center: true,
                padding: "15px",
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

                }
            },
            animation: {
                'gradient': 'gradient 8s ease infinite'
            },
        },
    },
    plugins: [],
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
    for (let i = start; i <= end; i+=50) {
        transitionDurationRange[i] = (i + "ms").toString();
    }
    return transitionDurationRange;
}

// Generate Transition Delays
function generateDelayRange(start, end) {
    const delayRange = {};
    for (let i = start; i <= end; i+=50) {
        delayRange[i] = (i + "ms").toString();
    }
    return delayRange;
}
