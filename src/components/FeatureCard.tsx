import Button from "./Button";

function FeatureCard({ img, price, text }: { img: string; price: number; text: string }) {
    return (
      <div className="flex flex-col w-[242px] h-[448px] bg-white shadow rounded-md overflow-hidden">
        <img src={img} alt="Product" className="bg-[#F5F5F5] h-[273px] object-cover" />
        <div className="flex flex-col justify-between flex-grow px-2 pt-6 pb-1">
          <p className="text-sm line-clamp-3">{text}</p>
          <div className="flex justify-between items-center ">
            <h2 className="text-base font-bold">${price.toFixed(2)}</h2>
            <Button className=" text-[15px] leading-[30px] font-semibold px-[10px] py-[5px]" text="Add to Cart">
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  
export default FeatureCard
