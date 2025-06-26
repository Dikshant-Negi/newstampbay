import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function ZoomCard({ data }: any) {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const zoomRef = useRef<HTMLImageElement | null>(null);

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const handleMouseMove = (e: any) => {
    const container = containerRef?.current?.getBoundingClientRect();
    const zoom = zoomRef?.current?.getBoundingClientRect();
    const image = imageRef?.current?.getBoundingClientRect();

    if (!container || !zoom || !image) return;

    const xRatio = (zoom.width - container.width) / image.width;
    const yRatio = (zoom.height - container.height) / image.height;

    const x = e.pageX - image.left;
    const y = e.pageY - image.top;

    setOffset({
      left: Math.max(Math.min(x, image.width), 0) * -xRatio,
      top: Math.max(Math.min(y, image.height), 0) * -yRatio,
    });
  };

  return (
    <div
      ref={containerRef}
      className="col-span-2 bg-gray-200 flex justify-center items-center rounded-2xl relative overflow-hidden border border-cyan-500  hover:shadow-2xl hover:cursor-zoom-in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      
      <img
        ref={imageRef}
        src={data.img}
        alt="Thumbnail"
        className="object-cover w-[376px] h-full z-10"
        style={{ opacity: opacity === 1 ? 0 : 1 }}
      />

      <img
        ref={zoomRef}
        src={data.img}
        alt="Zoom"
        style={{
          position: "absolute",
          left: offset.left,
          top: offset.top,
          opacity: opacity,
          pointerEvents: "none",
        }}
        className="transition-opacity duration-200 object-cover z-0"
      />

      <div className="w-10 h-10 rounded-full cursor-pointer bg-white absolute right-2 top-2 flex items-center justify-center z-20" onClick={() => setOpen(true)}>
        <IoSearchOutline size={20} />
      </div>

       <Lightbox
    
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={[
          { src: "/featuredProducts/f1.png" },
          { src: "/featuredProducts/f1.png" },
          { src: "/featuredProducts/f1.png" },
        ]}

      />
    </div>
  );
}
