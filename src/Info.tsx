import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Tutorial: React.FC = () => {
  return (
    <>
      <div className="flex justify-center p-5">
        <div className="bg-slate-600 p-5 border border-gray-300 rounded-md w-full max-w-4xl min-h-[500px] text-lg">
          <h1>1. Type your message that you want to get corrected.</h1>
          <h1>2. Select Explanation Language.</h1>
          <h1>3. Click Submit. (cmd + Enter, Ctrl + Enter also work)</h1>
          <h1 className='pb-15'>4. You will get an explanation in the selected Language.</h1>
          <div className="flex justify-center">
            <LazyLoadImage
              src="/how-to-use.png"
              alt="how to use pic"
              width={600}
              height={100}
              className='rounded-sm'
            />
          </div>
          <div className="flex justify-center pt-8">
            <Link to="/" className='border-amber-50 bg-blue-600 rounded-md p-3 hover:bg-blue-700 transition-colors'>Got it!</Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 pt-10 pb-20'>
        <h2 className="text-xl">If you want to thank me</h2>
        <Link to="https://buymeacoffee.com/kellyb9">
          <LazyLoadImage
            src="/bmc-full-logo.png"
            alt="bmc logo"
            width={200}
            height={1}
            className='rounded-md'
          />
        </Link>
      </div>
    </>
  )
}

export default Tutorial
