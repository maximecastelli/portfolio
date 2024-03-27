// Core packages
import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion"

// Utils
import SetGridGap from '../components/utils/set.grid.util'

// Structure
import Layout from '../components/layout/layout'

// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import "../node_modules/the-new-css-reset/css/reset.css"

// Fontsource local font import (https://github.com/fontsource/fontsource)

import "@fontsource-variable/familjen-grotesk"

import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

import localFont from 'next/font/local'

const SangBleuEmpire = localFont({ src: [{path:'../public/fonts/SangBleu/SangBleuEmpire-Black-WebTrial.woff', style:'normal'},{path:'../public/fonts/SangBleu/SangBleuEmpireTrial-BlackItalic.woff',style:'italic' }]})

/*
  @font-face {
    font-family: 'type';
    src: url('../assets/fonts/SangBleu/SangBleuEmpire-Black.otf') format('opentype');
  }
*/

// Devicon import (https://github.com/devicons/devicon)
import '../node_modules/devicon/devicon.min.css'

// Global css
import '../styles/css/variables.css'
import '../styles/css/global.css'

/**
 * _app.jsx
 *
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */
export default function MyApp({ Component, pageProps }) {
	return (
		<>
		<style jsx global>{`
        :root {
          --font-serif: ${SangBleuEmpire.style.fontFamily};
        }
      `}</style>
		<LazyMotion features={domAnimation}>
			<Layout className={SangBleuEmpire.className}>
				<Component {...pageProps} />
				<SetGridGap />
				<Analytics />
			</Layout>
		</LazyMotion>
		</>
	)
}