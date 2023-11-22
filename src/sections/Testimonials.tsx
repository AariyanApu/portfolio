'use client';
import { TypingTitle } from '@/components/utility/CustomTexts';
import { reviewType } from '@/types/utilityTypes';
import { reviews } from '@/utils/data';
import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

function Review({
  title,
  body,
  author,
  rating,
  className,
  imgSrc,
  ...props
}: reviewType) {
  const animationDelay = useMemo(() => {
    const possibleAnimationDelays = [
      '0s',
      '0.1s',
      '0.2s',
      '0.3s',
      '0.4s',
      '0.5s',
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-secondary-color p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className=''>
        <p className="mt-4 text-lg font-semibold leading-6 text-slate-color-lighter before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className='mt-3 text-base leading-7 text-slate-color'>{body}</p>
      </blockquote>
      <div className='mt-3 flex gap-2'>
        <Image
          alt={author}
          height={40}
          width={40}
          src={imgSrc}
          className=' h-10 w-10 rounded-full '
        />
        <div className='my-auto text-sm text-primary-color'>{author}</div>
      </div>
    </figure>
  );
}

function splitArray(array: any[], numParts: number) {
  // const result = [];
  const result: any[][] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  className,
  // eslint-disable-next-line no-shadow
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}: {
  className?: string;
  // eslint-disable-next-line no-shadow
  reviews: reviewType[];
  reviewClassName?: any;
  msPerPixel?: number;
}) {
  // const columnRef = useRef();
  // const columnRef = useRef<HTMLElement | null>(null);
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    const resizeObserver = new window.ResizeObserver(() => {
      if (columnRef.current) {
        setColumnHeight(columnRef.current.offsetHeight);
      }
    });

    if (columnRef.current) {
      resizeObserver.observe(columnRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  // const containerRef = useRef();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(reviews, 3);
  columns = [columns[0], columns[1], splitArray(columns[2], 2)];

  return (
    <div
      ref={containerRef}
      className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3'
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex: number) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className='hidden md:block'
            reviewClassName={(reviewIndex: number) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className='hidden lg:block'
            msPerPixel={10}
          />
        </>
      )}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background-color' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background-color' />
    </div>
  );
}

export default function Testimonial() {
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id='reviews' aria-labelledby='reviews-title' className='rounded'>
      <div className='mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-16   lg:px-8'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <TypingTitle title='Some of my happy clients' />
        </motion.div>
        <ReviewGrid />
      </div>
    </section>
  );
}
