'use client';

import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export function ExpandableText({
  title,
  content,
  className,
}: {
  title: string;
  content: string;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = useCallback(() => {
    setExpanded((value) => !value);
  }, [setExpanded]);

  return (
    <div className={clsx('flex flex-col items-center', className)}>
      <p
        onClick={handleClick}
        className="flex items-center cursor-pointer whitespace-nowrap leading-none py-2 px-4 rounded-2xl mt-auto mb-2 text-lg font-semibold tracking-tight text-white border w-fit bg-opacity-80 backdrop-filter backdrop-blur-sm"
        style={{
          backgroundColor: '#cc1402',
          borderColor: '#ff2400',
        }}
      >
        {title}
        <IoIosArrowDown className="ml-2" />
      </p>
      <Transition
        show={expanded}
        enter="transition-opacity duration-500 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => <p ref={ref}>{content}</p>}
      </Transition>
    </div>
  );
}
