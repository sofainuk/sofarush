/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { forest:'#542a2d', cream:'#f7f4ee', ink:'#202622', clay:'#bd8b67', sage:'#eee5dc' }, fontFamily: { sans:['Inter','ui-sans-serif','system-ui'], display:['Georgia','serif'] }, boxShadow: { soft:'0 16px 50px rgba(24,59,53,.10)' } } }, plugins: [] }
