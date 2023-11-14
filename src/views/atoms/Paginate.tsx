import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '../../redux/store';
import { increment, decrement } from '../../redux/features/counterSlice';

export function DefaultPagination() {
  const [active, setActive] = React.useState(1);
  const dispatch = useAppDispatch();

  const getItemProps = (index: any) =>
    ({
      variant: active === index ? 'filled' : 'text',
      color: 'gray',
    } as any);

  const next = () => {
    if (active === 5) return;
    dispatch(increment());
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    dispatch(decrement());
    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-1 mt-3 justify-end">
      <Button
        variant="text"
        className="text-sm"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-[2px]">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="text-sm"
        onClick={next}
        disabled={active === 5}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
