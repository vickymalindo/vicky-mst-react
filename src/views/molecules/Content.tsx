import React from 'react';
import { DefaultPagination as Paginate } from '../atoms/Paginate';
import { CardDefault as Card } from '../atoms/Card';

const Content = () => {
  return (
    <>
      <Paginate />
      <section className="flex flex-wrap justify-center md:justify-between gap-2">
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default Content;
