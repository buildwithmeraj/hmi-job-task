import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    id: 1,
    product: "/images/products/product-1.webp",
    details: "/images/details/product-1-details.webp",
  },
  {
    id: 2,
    product: "/images/products/product-2.webp",
    details: "/images/details/product-2-details.webp",
  },
  {
    id: 3,
    product: "/images/products/product-3.webp",
    details: "/images/details/product-3-details.webp",
  },
  {
    id: 4,
    product: "/images/products/product-4.webp",
    details: "/images/details/product-4-details.webp",
  },
  {
    id: 5,
    product: "/images/products/product-5.webp",
    details: "/images/details/product-5-details.webp",
  },
  {
    id: 6,
    product: "/images/products/product-6.webp",
    details: "/images/details/product-6-details.webp",
  },
  {
    id: 7,
    product: "/images/products/product-7.webp",
    details: "/images/details/product-7-details.webp",
  },
  {
    id: 8,
    product: "/images/products/product-8.webp",
    details: "/images/details/product-8-details.webp",
  },
  {
    id: 10,
    product: "/images/products/product-10.webp",
    details: "/images/details/product-10-details.webp",
  },
];

const PhoneMockup = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    items.forEach((item) => {
      const productImg = new Image();
      productImg.src = item.product;
      const detailImg = new Image();
      detailImg.src = item.details;
    });

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  const topCards = useMemo(() => {
    const offsets = [-2, -1, 0, 1, 2];
    return offsets.map((offset) => {
      const index = (activeIndex + offset + items.length) % items.length;
      return { offset, ...items[index] };
    });
  }, [activeIndex]);

  const activeItem = items[activeIndex];

  return (
    <section className="my-2 px-4">
      <div className="mx-auto max-w-5xl text-center">
        <div className="relative mt-2 flex justify-center overflow-hidden px-4 pb-0 pt-6">
          <div className="relative z-10 mt-2 h-140 w-74 rounded-[38px] border-10 border-[#bfc5c1] bg-[#f7f8f7] shadow-[0_30px_80px_rgba(30,40,28,0.2)]">
            <div className="absolute left-1/2 top-3 z-50 h-5 w-22 -translate-x-1/2 rounded-full bg-black p-3">
              <div className="absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#161616] ring-2 ring-[#2d2d2d]" />
            </div>

            <div className="pointer-events-none absolute left-1/2 top-14 z-30 w-115 -translate-x-1/2 overflow-visible">
              <div className="relative h-24 w-full">
                <AnimatePresence initial={false}>
                  {topCards.map((card) => {
                    const depth = Math.abs(card.offset);
                    const x = card.offset * 100;

                    return (
                      <motion.div
                        key={`card-${card.id}`}
                        initial={{
                          x: x + 108,
                          opacity: 0,
                          scale: depth === 0 ? 1.16 : depth === 1 ? 0.9 : 0.86,
                        }}
                        animate={{
                          x,
                          opacity: depth === 0 ? 1 : depth === 1 ? 0.3 : 0.2,
                          scale: depth === 0 ? 1.16 : depth === 1 ? 0.82 : 0.76,
                        }}
                        exit={{
                          x: x - 108,
                          opacity: 0,
                          scale: depth === 0 ? 1.16 : depth === 1 ? 0.9 : 0.86,
                        }}
                        transition={{ duration: 0.42, ease: "easeInOut" }}
                        className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-2xl border border-[#ececec] bg-white shadow-sm will-change-transform"
                      >
                        <img
                          src={card.product}
                          alt={`Product ${card.id}`}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-white">
              <div className="absolute inset-x-0 bottom-0 top-32 z-40 overflow-hidden rounded-t-[18px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`overview-${activeItem.id}`}
                    src={activeItem.details}
                    alt={`Product overview ${activeItem.id}`}
                    initial={{ y: 54, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.46, ease: "easeOut" }}
                    className="mt-4 w-full object-contain rounded-t-[26px] border-t border-[#f0f0f0] bg-[#fcfcfc]"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneMockup;
