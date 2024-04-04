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
        className="mb-2 flex w-fit w-fit cursor-pointer items-center whitespace-nowrap rounded-full bg-gradient-to-b from-scarlet-600 to-scarlet-700 px-6 py-2 text-white shadow hover:from-scarlet-700 hover:to-scarlet-800 disabled:cursor-not-allowed disabled:bg-scarlet-100 disabled:bg-none disabled:text-scarlet-400"
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
