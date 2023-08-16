import Link from "next/link"

export const metadata = {
    title: 'About page',
    description: 'All you need to learn about us',
  }

export default function About() {
    return (
      <main>
    <h1>About us</h1>
    <Link href={'/'}>Navigate to home</Link>
      </main>
    )
  }
  