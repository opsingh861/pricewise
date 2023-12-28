import Image from 'next/image'
import Searchbar from './components/Searchbar'
import HeroCarousel from './components/HeroCarousel'

export default function Home() {
  return (
    <>
      <section className='px-6 md:px-20 py-24'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className="flex flex-col justify-center">
            <p className='small-text'>
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                width={16}
                height={16}
                alt="arrow-right"
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>
            <p className='mt-6'>
              Powerful, self-serve product and growth
              analytics to help you convert, engage, and
              retain more.
            </p>
            <Searchbar />
          </div>
        <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          <div className="trending-card">
            <div className="trending-card-img">
              <Image
                src="/assets/images/iphone.png"
                width={300}
                height={300}
                alt="iphone"
              />
            </div>
            <div className="trending-card-info">
              <h3 className="trending-card-title">
                Apple iPhone 12 Pro Max
              </h3>
              <p className="trending-card-price">
                $999.00
              </p>
            </div>
          </div>
          <div className="trending-card">
            <div className="trending-card-img">
              <Image
                src="/assets/images/iphone.png"
                width={300}
                height={300}
                alt="iphone"
              />
            </div>
            <div className="trending-card-info">
              <h3 className="trending-card-title">
                Apple iPhone 12 Pro Max
              </h3>
              <p className="trending-card-price">
                $999.00
              </p>
            </div>
          </div>
          <div className="trending-card">
            <div className="trending-card-img">
              <Image
                src="/assets/images/iphone.png"
                width={300}
                height={300}
                alt="iphone"
              />
            </div>
            <div className="trending-card-info">
              <h3 className="trending-card-title">
                Apple iPhone 12 Pro Max
              </h3>
              <p className="trending-card-price">
                $999.00
              </p>
            </div>
          </div>
          <div className="trending-card">
            <div className="trending-card-img">
              <Image
                src="/assets/images/iphone.png"
                width={300}
                height={300}
                alt="iphone"
              />
            </div>
            <div className="trending-card-info">
              <h3 className="trending-card-title">
                Apple iPhone 12 Pro Max
              </h3>
              <p className="trending-card-price">
                $999.00
              </p>
            </div>
          </div>
          <div className="trending-card">
            <div className="trending-card-img">
              <Image
                src="/assets/images/iphone.png"
                width={300}
                height={300}
                alt="iphone"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
