import TitleSection from "@/atoms/home/TitleSection";
import { blogList } from "@/constants/other";
import BlogCart from "@/molecules/home/BlogCart";
import { LogoType } from "@/utils/svg";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function BlogList() {
  return (
    <section class="blogs mb-8 md:mb-28">
      <div class="container">
        <div className="flex items-center justify-between mb-10">
          <TitleSection title="مطالب خواندنی" />
          <Link
            className="text-orange-300 w-32 h-10 flex items-center justify-center rounded-md gap-1 hover:bg-orange-200/20 transition-all"
            href="/products"
          >
            <span>مشاهده همه</span>
            <ChevronLeftIcon className="w-4 h-4" />
          </Link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
          {blogList.map((blog) => (
            <BlogCart blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
