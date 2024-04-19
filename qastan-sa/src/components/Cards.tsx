// Home pagina
import React from 'react';
import { ShieldCheck, FileCheck, FileCog, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Cards = () => {
    const { t } = useTranslation();

    return (
        <div className='container mx-auto my-20 grid  max-w-7xl justify-center'>
            <div className='md:mx-8'>
                <header className='mx-auto mb-20 max-w-xl text-center md:mb-16'>
                    <h1 className='mb-2 text-2xl font-normal md:text-4xl'>
                        {t('Home.Cards.Title')}
                    </h1>
                    <span className='mb-4 text-2xl font-semibold md:text-4xl'>
                        Peppol
                    </span>
                </header>
                <main>
                    <section
                        id='card_section'
                        className='grid items-center gap-6 md:grid-flow-col lg:grid-cols-3 md:gap-8 '
                    >
                        <div className='md:row-span-2'>
                            <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-legoLime bg-white p-7 shadow-2xl'>
                                <div className='mb-8'>
                                    <h3 className='mb-1.5 text-xl font-semibold'>
                                        {t('Home.Cards.CardTitle1')}
                                    </h3>
                                    <p className='text-sm opacity-50'>
                                        {t('Home.Cards.CardText1')}
                                    </p>
                                </div>
                                <div className='self-end'>
                                    <ShieldCheck size={32} strokeWidth={1} color='#469BC3' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-legoRed bg-white p-7 shadow-xl'>
                            <div className='mb-8'>
                                <h3 className='mb-1.5 text-xl font-semibold'>
                                    {t('Home.Cards.CardTitle2')}
                                </h3>
                                <p className='text-sm opacity-50'>
                                    {t('Home.Cards.CardText2')}
                                </p>
                            </div>
                            <div className='self-end'>
                                <FileCheck size={32} strokeWidth={1} color='#469BC3' />
                            </div>
                        </div>
                        <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-legoOrange bg-white p-7 shadow-xl'>
                            <div className='mb-8'>
                                <h3 className='mb-1.5 text-xl font-semibold'>
                                    {t('Home.Cards.CardTitle3')}
                                </h3>
                                <p className='text-sm opacity-50'>
                                    {t('Home.Cards.CardText3')}
                                </p>
                            </div>
                            <div className='self-end'>
                                <FileCog size={32} strokeWidth={1} color='#469BC3' />
                            </div>
                        </div>
                        <div className='md:row-span-2'>
                            <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-legoBlue bg-white p-7 shadow-xl'>
                                <div className='mb-8'>
                                    <h3 className='mb-1.5 text-xl font-semibold'>
                                        {t('Home.Cards.CardTitle4')}
                                    </h3>
                                    <p className='text-sm opacity-50'>
                                        {t('Home.Cards.CardText4')}
                                    </p>
                                </div>
                                <div className='self-end'>
                                    <Workflow size={32} strokeWidth={1} color='#469BC3' />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Cards;
