import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { blogPost } from '../data/DataBlog';

type Props = {
  blog?: Blogpost;
};

function BlogArticle({ blog }: Props) {
  const { t, i18n } = useTranslation();

  const paragraphs = blog ? blog[i18n.language as Language].paragraph : [];
  const halfLength = Math.ceil(paragraphs.length / 2);
  const leftColumnParagraphs = paragraphs.slice(0, halfLength);
  const rightColumnParagraphs = paragraphs.slice(halfLength);
  return (
    <>
      <div className="flex items-center justify-between mb-8 container">
        <a href='/Blog' className="flex items-center space-x-2">
          <ArrowLeft className='mr-3' />
          {t('Blog.Back')}
        </a>
      </div>
      <div className={`grid md:grid-cols-${paragraphs.length < 2 ? '1' : '2'} gap-6 container mb-20`}>
        <div>
          <h2 className="text-lg md:text-3xl font-bold mb-2">{blog && blog[i18n.language as Language].title}</h2>
          <h3 className="text-sm md:text-base text-gray-500 uppercase mb-4">{t('Blog.About')} {blog && blog[i18n.language as Language].subtitle}</h3>

          {leftColumnParagraphs.map((paragraph, index)=>(
            <div key={index}>
              <h4 className="font-semibold text-xl">{paragraph.title}</h4>
              <p className="text-base md:text-lg mb-4">{paragraph.content}</p>
              {paragraph.image_id && (
                <figure className="relative my-10">
                  <img className="w-full object-contain" src={blog && blog.images[i18n.language as Language].find(img => img.image_id === paragraph.image_id)?.source} alt={paragraph.title}/>
                </figure>
              )}
            </div>
          ))}
        </div>
        {rightColumnParagraphs.length > 0 && (
          <div>
          {rightColumnParagraphs.map((paragraph, index)=>(
            <div key={index}>
              <h4 className="font-semibold text-xl">{paragraph.title}</h4>
              <p className="text-base md:text-lg mb-4">{paragraph.content}</p>
              {paragraph.image_id && (
                <figure className="relative my-10">
                  <img className="w-full object-contain" src={blog && blog.images[i18n.language as Language].find(img => img.image_id === paragraph.image_id)?.source} alt={paragraph.title}/>
                </figure>
              )}
            {(paragraph.list && paragraph.list.length > 0) && (
              <>
                <h5 className='font-semibold'>{paragraph.subtitle}</h5>
                <ul className='mb-10'>
                  {paragraph.list.map((listItem, idx) => (
                    <li key={idx}>
                      {listItem.title && <h5 className='font-medium mb-3 mt-5'>{listItem.title}</h5>}
                      {listItem.content && (
                        <ul>
                          {listItem.content.map((item, index) => (
                            <li className='list-disc ml-10' key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                </>
              )}

            </div>
          ))}
        </div>
        
        )}
      </div>
      
      <div className='container mx-auto grid grid-cols-2'>
        <p className='italic'>
          {t('Blog.Questions')}
          <a href="mailto:hallo@qastan.be" className='text-legoOrange font-bold'> hallo@qastan.be</a>
        </p>
      </div>
      <div className='flex justify-center mb-20'>
        <a href='/Blog' className="w-fit font-bold bg-legoOrange mb-3 mt-2 md:mt-0 mr-2 md:mr-0 px-5 py-3 text-sm text-white transition duration-500 hover:bg-legoBlue">{t('Blog.Back')}</a> 
      </div>
    </>
  );
}

export default BlogArticle;
