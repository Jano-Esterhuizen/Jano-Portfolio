import React from 'react'

const aboutItems = [
    {
        label: 'Project done',
        number: 2
    },
    {
        label: 'Years of experience',
        number: 1
    }
];

const About = () => {
    return (
        <section
            id='about'
            className='section'
        >
            <div className='container'>

                <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
                    <p className='text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]'>

                        Welcome! I&apos;m Jano, a dedicated student pursuing an Honors degree in Computer Science and working as a Junior Software Engineer. Driven by learning and a passion for Software, Web Development and  AI, I aim to make a positive impact through innovative software solutions. I have a solid foundation in computer science principles and programming languages, excelling in problem-solving and collaborative environments. With a deep understanding of software development practices, I am eager to contribute to cutting-edge projects.
                    </p>

                    <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className='flex items-center md:mb-2'>
                                        <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                        <span className='text-emerald-400 font-semibold md:text-3xl'>+</span>
                                    </div>
                                    <p className='text-sm text-zinc-400'>{label}</p>
                                </div>
                            ))
                        }

                        <img 
                        src="/images/JELogo.png" 
                        alt="Logo" 
                        width={30}
                        height={30}
                        className='ml-auto md:w-[40px] md:h-[40px]'

                        />

                    </div>
                </div>
            </div>

        </section>
    )
}

export default About