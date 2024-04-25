// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { DM_Sans } from 'next/font/google'
import { Comfortaa } from 'next/font/google'
import './styles.css'

const dm_sans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm_sans',
})
const comfortaa = Comfortaa({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-comfortaa',
})

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body className={dm_sans.variable + comfortaa.variable}>
                {children}
            </body>
        </html>
    )
}