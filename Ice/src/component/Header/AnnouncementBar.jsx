import { FaIceCream } from "react-icons/fa";

export default function AnnouncementBar() {
    return (
        <div className="bg-red-600 text-white text-sm py-1 px-4 overflow-hidden relative">
            <div className="flex gap-10 animate-slide-track whitespace-nowrap w-max">
                {Array(10).fill(null).map((_, i) => (
                    <span key={i} className="flex items-center gap-2">
                        <FaIceCream /> mrwhippyvans1@yahoo.com
                        <span className="mx-4">|</span>
                        <FaIceCream /> Contact For Event / Can Serve Anywhere
                    </span>
                ))}
            </div>
        </div>
    );
}
