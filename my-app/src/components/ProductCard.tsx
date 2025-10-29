import Image from "next/image";

export type ProductCardProps = {
  title: string;
  domain: string;
  imageUrl: string;
  link: string;
};

const ProductCard = (props: ProductCardProps) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start md:items-center justify-between gap-4 p-5 bg-white 
      dark:bg-[#252525] rounded-2xl transition-all 
      duration-300 group hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
    >
      <div className="flex flex-1 flex-col md:flex-row items-start justify-between md:items-center gap-3 md:gap-0">
        <div className="flex items-center justify-start gap-4">
          <div className="size-12 rounded-full flex items-center justify-center border border-amber-200">
            <Image
              src={props.imageUrl}
              alt={props.title}
              width={56}
              height={56}
              className="size-9 rounded-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-0.5 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              {props.title}
            </h3>
          </div>
        </div>
        <span className="text-xs px-2 py-1.5 w-max rounded-full dark:bg-[#424242] bg-[#F0F0F0] text-gray-400 uppercase dark:text-[#A0A0A0] font-semibold shrink-0 mr-2">
          {props.domain}
        </span>
      </div>

      <svg
        className="size-5 text-gray-400 dark:text-gray-500 shrink-0 transform transition-transform duration-300 
        group-hover:scale-125 group-hover:translate-x-1 group-hover:text-black group-hover:dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
};

export default ProductCard;
