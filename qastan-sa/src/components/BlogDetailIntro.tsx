import React from 'react';
import { useTranslation } from 'react-i18next';
import { blogPost } from '../data/DataBlog';

type Props = {
  blog?: Blogpost;
}

function BlogDetailIntro({ blog }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <div className='justify-center my-20'>
      <p className="text-md uppercase text-center">{blog?.date_published}</p>
      <h2 className="text-lg px-2 md:text-4xl lg:text-5xl font-bold text-center lg:w-2/3 mx-auto">{blog && blog[i18n.language as Language].title}</h2>
      <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoOrange block mt-4 mb-6" />
    </div>
  );
}

export default BlogDetailIntro;
