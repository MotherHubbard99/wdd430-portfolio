import Link from 'next/link';  //route changes can happen without a full-page refresh

export default function Header() {
    return (
      //className applies Tailwind CSS utility classes for background color, text color, padding top and padding bottom, spacing, shadow, and more
    <header className="bg-[#C67FAE] text-lightgray py-4 shadow-lg">  
      <div id="header-title" className="text-2xl font-bold">Angela Hubbard</div>
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>  
          <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex gap-6">
          <li><a href="https://github.com/MotherHubbard99" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
    );
    //use next.js link for internal routes and <a>for external links
}