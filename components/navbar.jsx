export default function Navbar() {
    return (
        <div className="px-6 lg:px-0">
            <nav className="w-full h-20 border border-gray-200 mt-8 flex items-center justify-center">
                <ol className="container grid grid-cols-6 h-full">
                    <li className="col-span-1 flex items-center justify-between">
                        <a className="flex items-center gap-2">
                            <p className="text-2xl font-bold text-gray-500">
                                hek
                            </p>
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    )
}