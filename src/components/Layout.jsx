import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    const Image = React.useRef();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [isShowing, setIsShowing] = React.useState(null);


    try {
        if (loading) {
            <p className='text-center m-auto'>Loading</p>
        }
    } catch (error) {
        setError(error);
    }

    return (
        <>
            <Header logo={"Finder"} />

            <section>
                <div>
                    <h1>Find your Ideal Stay</h1>
                    <p className='font-thin'>Explore Hotels, Homes, and Beyond!</p>
                </div>

                <div className='main-image rounded-md m-auto relative z-0'>
                    <img onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)} ref={Image} className='rounded-md shadow-md m-auto top-[150px] relative z-0' src="https://www.ahstatic.com/photos/9149_ho_00_p_1024x768.jpg" alt="image of city" loading='lazy' />
                </div>

                {isShowing && <ImageCoverModal />}

            </section>

            <main className='main-container h-[100vh]'>{children}</main>
            <Footer />
        </>
    )
}

function ImageCoverModal({ isShowing }) {
    return isShowing ? (
        <>
            <h1 className='text-2xl'>HELLO</h1>
        </>
    ) : null;
}
