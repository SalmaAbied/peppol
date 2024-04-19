import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { blogPost } from '../Data/DataBlog';

type Props = {
  blog?: Blogpost;
};

function BlogArticle({ blog }: Props) {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <div className="flex items-center justify-between mb-8 container">
        <a href='/Blog' className="flex items-center space-x-2">
          <ArrowLeft className='mr-3' />
          {t('Blog.Back')}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{blog&&blog[i18n.language as Language].title}</h2>
          <h3 className="text-sm md:text-base text-gray-500 uppercase mb-4">{t('Blog.About')} {blog&&blog[i18n.language as Language].subtitle}</h3>

          {blog && blog[i18n.language as Language].paragraph.map((paragraph, index)=>(
            <div key={index}>
              <h4 className="font-semibold text-xl">{paragraph.title}</h4>
              <p className="text-base md:text-lg mb-4">{paragraph.content}</p>
              <figure className="relative my-10">
                <img className="w-full object-contain" src={blog.images[i18n.language as Language].find(img => img.image_id === paragraph.image_id)?.source} alt={paragraph.title}/>
              </figure>
            </div>
          ))}
{/*           
          {blog?.articlePartOne && (
            <div>
              {blog.articlePartOne.title && <h4 className="font-semibold text-xl">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartOne.title}</h4>}
              <p className="text-base md:text-lg mb-4">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartOne.content}</p>
            </div>
          )} */}
          {/* {blog?.articlePartTwo && (
            <div>
              {blog.articlePartTwo.title && <h4 className="font-semibold text-xl">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartTwo.title}</h4>}
              <p className="text-base md:text-lg mb-4">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartTwo.content}</p>
            </div>
          )} */}
          {/* <figure className="relative my-10">
            {blog&&blogPostTranslations[blog.id][i18n.language] && (blog.extraImg || blog.imageUrl) && (
              <img className="w-full object-contain" src={blog&&blogPostTranslations[blog.id][i18n.language].extraImg || blog.imageUrl} alt={blog&&blogPostTranslations[blog.id][i18n.language].title} />
            )}
          </figure> */}
        </div>
        {/* <div>
          {blog&&blogPostTranslations[blog.id][i18n.language]?.articlePartThree && (
              <div>
                {blog&&blogPostTranslations[blog.id][i18n.language].articlePartThree.title && <h4 className="font-semibold text-xl">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartThree.title}</h4>}
                <p className="text-base md:text-lg mb-4">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartThree.content}</p>
              </div>
            )}
          <figure className="relative my-10">
              {blog&&blogPostTranslations[blog.id][i18n.language] && (blog.extraImg || blog.imageUrl) && (
                <img className="w-full object-contain" src={blog&&blogPostTranslations[blog.id][i18n.language].extraImg1 || blog.imageUrl} alt={blog&&blogPostTranslations[blog.id][i18n.language].title} />
              )}
          </figure>
          {blog&&blogPostTranslations[blog.id][i18n.language]?.articlePartFour && (
              <div>
                {blog&&blogPostTranslations[blog.id][i18n.language].articlePartFour.title && <h3 className="font-semibold text-xl">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartFour.title}</h3>}
                <p className="text-base md:text-lg mb-4">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartFour.content}</p>
              </div>
          )}

          {blog&&blogPostTranslations[blog.id][i18n.language]?.articlePartFive && (
              <div>
                {blog&&blogPostTranslations[blog.id][i18n.language].articlePartFive.title && <h3 className="font-semibold text-xl">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartFive.title}</h3>}
                <p className="text-base md:text-lg mb-4">{blog&&blogPostTranslations[blog.id][i18n.language].articlePartFive.content}</p>
              </div>
          )}
        </div> */}
       
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