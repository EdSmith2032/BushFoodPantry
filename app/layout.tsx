import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title: 'Bush Food Pantry | Neighbors helping neighbors in Bush, LA',description: 'Find food assistance at Bush Food Pantry in St. Tammany Parish. Plan your visit, contact the pantry, and learn how to help your neighbors.',robots: {index: false, follow: false}};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}
