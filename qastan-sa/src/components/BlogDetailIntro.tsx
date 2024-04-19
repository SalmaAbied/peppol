import React from 'react';
import { useTranslation } from 'react-i18next';
import { blogPost } from '../Data/DataBlog';

type Props = {
  blog?: Blogpost;
}

function BlogDetailIntro({ blog }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <div className='justify-center my-20'>
      <p className="text-md uppercase text-center">{blog?.date_published}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-center lg:w-2/3 mx-auto">{blog?.nl.title}</h2>
      <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoLime block mt-4 mb-6" />
    </div>
  );
}

export default BlogDetailIntro;
