import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tabs from './Tabs';
import { blogPost, categories } from "../Data/DataBlog";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();

  // const categories = [t('Blog.Cat1'), t('Blog.Cat2'), t('Blog.Cat3')];
  const postsPerPage = 9;

  const [activeTab, setActiveTab] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleTabClick = (category_id:number) => {
    setActiveTab(category_id);
    setCurrentPage(1);
  };

  const filteredPosts = activeTab === -1 ? blogPost : blogPost.filter(b => b.category === activeTab);
  // const filteredPosts = activeTab === `${t('Blog.Cat')}` ? Object.values(blogPostTranslations).map(post => post[i18n.language]) : 
  // Object.values(blogPostTranslations).map(post => post[i18n.language]).filter(post => post.category === activeTab);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="container mx-auto my-20">
      <div className='justify-center'>
        <p className="text-md uppercase  text-center">{t('Blog.Subtitle')}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">{t('Blog.Title')}</h2>
        <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoLime block mt-4 mb-6" />
        <p className="text-center lg:text-lg max-w-3xl mx-auto mb-10">
          {t('Blog.Intro')}
        </p>
      </div>
      <Tabs categories={categories} activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="gap-8 flex flex-wrap justify-center">
        {currentPosts.map((post, index) => {
          return (
            <div key={index} className="w-full relative h-96 lg:w-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img src={post.imageUrl} alt={post[i18n.language as Language].title} className="w-full h-96 object-cover transition duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-4">
                    <h3 className="text-white text-lg font-semibold mb-2">{post[i18n.language as Language].title}</h3>
                    <div className='flex justify-between text-white font-semibold text-sm mb-0'>
                      <p className="text-white font-bold text-sm mb-0">{post[i18n.language as Language].subtitle}</p>
                      <div>
                        <Link to={`/Blog/${post.id}~${post[i18n.language as Language].title.replace(' ', '-')}`} className='text-legoOrange flexborder-b border-legoOrange p-1'>{t('Blog.ReadMore')}</Link>
                        <hr className='w-8 mx-auto border-legoOrange border-2'/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-2 px-3 py-1"
        >
          <ArrowLeft/>
        </button>
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-2 px-3 py-1 border border-black-300 hover:bg-legoOrange hover:text-white hover:font-bold focus:outline-none ${
              currentPage === i + 1 ? 'bg-legoOrange text-white font-bold border-none' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPost >= filteredPosts.length}
          className="mx-2 px-3 py-1"
        >
          <ArrowRight/>
        </button>
      </div>
    </section>
  );
};

export default Blog;
