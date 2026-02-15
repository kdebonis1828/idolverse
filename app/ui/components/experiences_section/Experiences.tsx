import { ExpeciencesCard } from './ExpeciencesCard'

export const Experiences = () => {
  return (
    <div className='flex flex-wrap justify-center relative gap-x-5 gap-y-5'>
        <ExpeciencesCard 
            title='Coffee M&G with Rosé'
            description='Share a quite coffe with Rosé and attend an intimate listening session of her latest album'
            image='/idols/blackpink/rosebp.png'
            perks={[
                "VIP concert access",
                "Merch Pack",
                "Signed polaroid",
                "Session video"
            ]}  
            alt='Rosé from BLACKPINK promotional image'
            href='/'
            variant='detailed'
        />

        <ExpeciencesCard 
            title='Stray Kids dance session'
            image='/idols/straykids/expstraykids.png'
            alt='Stray kids Promotional image'
            href='/'
        /> 
       <ExpeciencesCard 
            title='Stray Kids dance session'
            image='/idols/straykids/expstraykids.png'
            alt='Stray kids Promotional image'
            href='/'
        />
        <ExpeciencesCard 
            title='Jungkook magic Seoul'
            description='Enjoy a private night around Seoul  with  Jungkook and create unforgettable  memories together'
            image='/idols/bts/jungkookexp.png'
            perks={[
                "VIP concert access",
                "Merch Pack",
                "Signed polaroid",
                "Session video"
            ]}  
            alt='Jungkook from BTS promotional image'
            href='/'
            variant='detailed'
            className='overflow-hidden absolute lg:-top-20'
        />
    </div>
  )
}

