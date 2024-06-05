import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect, createRef } from 'react'
import Container from '../components/Container'

const Timer = ({ type }: any) => {
  const [timer, setTimer] = useState({ days: 0, hr: 0, min: 0, sec: 0 })
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const countDownDate = new Date('January 1, 2025 15:37:25').getTime()
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setTimer({ days: days, hr: hours, min: minutes, sec: seconds })
      setIsLoading(false)

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x)
      }
    }, 1000)
  }, [])

  switch (type) {
    case 'vertical':
      return (
        <div id="timer" className="mt-5">
          {!isLoading && (
            <div className="bg-skin-secondary inline-block justify-center rounded-xl p-2 align-middle">
              <div className="flex">
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.days}</span>
                  <span className="text-xs text-pink-500">Days</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.hr}</span>
                  <span className="text-xs text-pink-500">Hrs</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.min}</span>
                  <span className="text-xs text-pink-500">mins</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.sec}</span>
                  <span className="text-xs text-pink-500">Sec</span>
                </span>
              </div>
              <a href="https://achuthhadnoor.gumroad.com/l/capshot">
                <button className="mt-2 w-full rounded-lg bg-orange-500 px-4 py-2 text-xs ring-purple-900 hover:ring-2 sm:text-sm">
                  Get It for{' '}
                  <span className="stroke-orange-600 text-purple-300 line-through">
                    $35
                  </span>{' '}
                  <span className="ring-1 ring-gray-900">$25</span>
                </button>
              </a>
            </div>
          )}
        </div>
      )
    case 'horizontal':
      return (
        <div id="timer" className="mt-4">
          {!isLoading && (
            <div className="bg-skin-secondary inline-block justify-center rounded-xl align-middle">
              <div className="bg-skin-secondary mt-5 inline-block justify-center rounded-xl px-2 align-middle ring ring-pink-500">
                <div className="flex">
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.days}</span>
                    <span className="text-xs text-pink-300">Days</span>
                  </span>
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.hr}</span>
                    <span className="text-xs text-pink-300">Hrs</span>
                  </span>
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.min}</span>
                    <span className="text-xs text-pink-300">mins</span>
                  </span>
                  <span className="mr-4 flex flex-col p-2">
                    <span>{timer.sec}</span>
                    <span className="text-xs text-pink-300">Sec</span>
                  </span>
                  <a href="https://gum.co/capshot" target="_blank">
                    <button className="m-2 rounded-lg bg-pink-800 px-4 py-2 text-xs outline-none ring-pink-900 hover:bg-pink-600 hover:ring-2 sm:text-sm">
                      Get It for
                      <span className="stroke-pink-300 px-1 font-bold text-pink-300 line-through">
                        $35
                      </span>
                      <span className="text-pink-100">$15</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="mt-5 flex items-center  gap-4 py-2">
                <span className="text-pink-300">Avalilable on</span>
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                  </svg>
                </span>
                {/* <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M6.6607 8.98214V14.7946L0.571411 13.9554V8.98214H6.6607ZM6.6607 2.34821V8.23214H0.571411V3.1875L6.6607 2.34821ZM15.4286 8.98214V16L7.33034 14.8839V8.98214H15.4286ZM15.4286 1.14286V8.23214H7.33034V2.25893L15.4286 1.14286Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="16" height="16" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </span> */}
              </div>
            </div>
          )}
        </div>
      )
    default:
      return null
  }
}
const Home: NextPage = () => {
  const [hideVideo, setHideVideo] = useState(true)
  return (
    <Container>
      <section className="flex flex-col p-2 pt-10 md:flex-row ">
        <div className="flex flex-col">
          <span className="px-2 py-5">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6643 7V18.4068M57 46.7338H37.3322H19.6643C18.5598 46.7338 17.6643 45.8384 17.6643 44.7338V18.4068M17.6643 18.4068H7M17.6643 18.4068H46.4336C47.5381 18.4068 48.4336 19.3023 48.4336 20.4068V57"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h1 className="max-w-3xl py-5 text-2xl font-bold leading-loose lg:text-5xl">
            Instantly edit screenshots in seconds
          </h1>
          <p className="max-w-xl text-2xl font-thin text-gray-400">
            A simple app to edit screenshots and share quickly.
          </p>
          {/* <button
            className="mt-5 flex items-center gap-2 align-middle text-xl hover:text-gray-400"
            onClick={() => {
              setHideVideo(false)
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99948 16.4999C13.1416 16.4999 16.4995 13.142 16.4995 8.99985C16.4995 4.85774 13.1416 1.49988 8.99948 1.49988C4.85737 1.49988 1.49951 4.85774 1.49951 8.99985C1.49951 13.142 4.85737 16.4999 8.99948 16.4999Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.50049 5.99988L12.0005 8.99985L7.50049 11.9999V5.99988Z"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Watch now
          </button> */}
          <Timer type={'horizontal'} />
          {!hideVideo && (
            <div className="fixed top-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black bg-opacity-70 align-middle">
              <span
                className="my-5 cursor-pointer"
                onClick={() => {
                  setHideVideo(!hideVideo)
                }}
              >
                <svg
                  className="scale-100"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9L9 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9L15 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <video
                controls={true}
                poster="/preview1.png"
                className="w-[400px] md:w-[800px]"
              >
                <source src="capshot.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          )}
        </div>
        <div>
          <Image
            className="rounded-2xl "
            height={500}
            width={1080}
            src={'/capshot.png'}
            alt="capshot app"
          />
        </div>
      </section>
      <section className="mt-10 p-2">
        {/* <h2 className='text-4xl text-center p-4 font-bold'>Features</h2> */}
        <div className="flex flex-col gap-2 px-4 md:flex-row">
          <div className="my-10 flex flex-1 flex-col items-center gap-4 rounded p-4 text-center">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4702_369)">
                  <path
                    d="M38.2041 0.979584H9.79594C4.92682 0.979584 0.979614 4.92679 0.979614 9.79591V38.2041C0.979614 43.0732 4.92682 47.0204 9.79594 47.0204H38.2041C43.0732 47.0204 47.0204 43.0732 47.0204 38.2041V9.79591C47.0204 4.92679 43.0732 0.979584 38.2041 0.979584Z"
                    stroke="#323232"
                    strokeWidth="2"
                  />
                  <path
                    d="M30.3674 20.5714H31.347C32.3862 20.5714 33.3828 20.9842 34.1176 21.7191C34.8525 22.4539 35.2653 23.4506 35.2653 24.4898C35.2653 25.5291 34.8525 26.5257 34.1176 27.2605C33.3828 27.9954 32.3862 28.4082 31.347 28.4082H30.3674"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6938 20.5714H30.3673V29.3878C30.3673 30.427 29.9545 31.4237 29.2196 32.1584C28.4848 32.8933 27.4882 33.3061 26.4489 33.3061H18.6122C17.573 33.3061 16.5763 32.8933 15.8415 32.1584C15.1066 31.4237 14.6938 30.427 14.6938 29.3878V20.5714Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6122 13.7143V16.6531"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5306 13.7143V16.6531"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.449 13.7143V16.6531"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4702_369">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-xl">Save time</span>
            <p className="font-thin leading-loose">
              Edit images by{' '}
              <i className="bold rounded-md p-1 text-neutral-50">
                drag and drop{' '}
              </i>
              {'  '}
              or copy paste
              <i className="bold rounded-md p-1 text-neutral-50">
                ctr(cmd) + c and ctrl(cmd) + v
              </i>
            </p>
          </div>
          <div className="my-10 flex flex-1 flex-col items-center gap-4 rounded p-4 text-center">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.865 16.5H18.135C17.232 16.5 16.5 17.232 16.5 18.135V29.865C16.5 30.768 17.232 31.5 18.135 31.5H29.865C30.768 31.5 31.5 30.768 31.5 29.865V18.135C31.5 17.232 30.768 16.5 29.865 16.5Z"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.25 16.5V31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.75 16.5V31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 24H31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 20.25H20.25"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 27.75H20.25"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.75 27.75H31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.75 20.25H31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="45.0204"
                  height="46"
                  rx="9"
                  stroke="#323232"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="text-xl">Control output</span>
            <p className="font-thin leading-loose">
              Save the image as png or Jpg or copy to clip board for easy
              access.
            </p>
          </div>

          <div className="my-10 flex flex-1 flex-col items-center gap-4 rounded p-4 text-center">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4702_365)">
                  <path
                    d="M38.2041 0.979584H9.79594C4.92682 0.979584 0.979614 4.92679 0.979614 9.79591V38.2041C0.979614 43.0732 4.92682 47.0204 9.79594 47.0204H38.2041C43.0732 47.0204 47.0204 43.0732 47.0204 38.2041V9.79591C47.0204 4.92679 43.0732 0.979584 38.2041 0.979584Z"
                    stroke="#323232"
                    strokeWidth="2"
                  />
                  <path
                    d="M29.3877 18.6122H15.6734C14.5914 18.6122 13.7142 19.4894 13.7142 20.5714V28.4082C13.7142 29.4902 14.5914 30.3673 15.6734 30.3673H29.3877C30.4698 30.3673 31.3469 29.4902 31.3469 28.4082V20.5714C31.3469 19.4894 30.4698 18.6122 29.3877 18.6122Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.2653 25.4694V23.5102"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4702_365">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-xl">Perfomance</span>
            <p className="font-thin leading-loose">
              The app stays on menubar and helps you quicly get the image edited
              no matter in which app you are.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-20">
        <h2 className="mt-10 text-center text-3xl">FAQ</h2>
        <div className="flex flex-col py-10 px-2 sm:flex-row">
          <div className="grid flex-1 grid-flow-row gap-2 text-gray-400 sm:grid-flow-col sm:grid-rows-3 sm:gap-0">
            <div className="p-1">
              <details>
                <summary className="py-1 text-xl">
                  Is it only available on Appsumo?
                </summary>
                <p className="max-w-xl p-2 px-4 font-thin">
                  The app is also avilable on gumroad where you can download
                  too.
                  <br />
                  However, the support for single app recording is in the
                  roadmap.
                </p>
              </details>
            </div>
            <div className="p-1">
              <details>
                <summary className="py-1 text-xl">
                  Do you offer a trial?
                </summary>
                <p className="max-w-xl p-2 px-4 font-thin">
                  We didn’t implement a trial yet, but no worries—feel free to
                  purchase the app. If you’re not happy send a short message.
                  We’ll refund your order.
                  <br />
                </p>
              </details>
            </div>
            <div className="p-1">
              <details>
                <summary className="py-1 text-xl">
                  The menubar app doesn’t work. What can I do?
                </summary>
                <p className="max-w-xl p-2 px-4 font-thin">
                  You can always send feedback in the chat widget on the website
                </p>
              </details>
            </div>
            <div className="p-1">
              <details>
                <summary className="py-1 text-xl">
                  Is there a Windows app?
                </summary>
                <p className="max-w-xl p-2 px-4 font-thin">
                  Currently it is only available for macOs
                </p>
              </details>
            </div>
            <div className="p-1">
              <details>
                <summary className="py-1 text-xl">
                  Something’s wrong. How do I get in touch?
                </summary>
                <p className="max-w-xl p-2 px-4 font-thin">
                  <a href="mailto:achuth.hadnoor123@gmail.com">
                    Drop us a line
                  </a>
                  , we’ll be happy to help!
                </p>
              </details>
            </div>
            <div className="p-1">
              <details>
                <summary className="py-1 text-xl">
                  Will you update capshot?
                </summary>
                <p className="max-w-xl p-2 px-4 font-thin">
                  Yes i am working on the app to make it better.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-4 sm:px-20">
        <h2 className="mt-10 text-center text-3xl">Download</h2>
        <div className="mt-5 flex items-center justify-center gap-2">
          {/* <Timer type="horizontal" /> */}
          {/* <a href="https://github.com/achuthhadnoor/www/releases/download/0.0.1/capshot-0.0.10.dmg">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 align-middle text-black">
                <span className="flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4656 13.3437C18.4375 10.4637 20.8134 9.08218 20.9219 9.01331C19.5853 7.05996 17.5036 6.79179 16.7627 6.76048C14.9919 6.58101 13.3078 7.8029 12.4083 7.8029C11.513 7.8029 10.1242 6.78657 8.65709 6.81266C6.72565 6.84292 4.94551 7.93542 3.95109 9.66443C1.9466 13.1433 3.43979 18.2991 5.39419 21.1237C6.34792 22.5042 7.48842 24.0558 8.98266 23.9985C10.4237 23.9421 10.9673 23.0677 12.7078 23.0677C14.4493 23.0677 14.9377 23.9985 16.4622 23.9703C18.0107 23.9432 18.9936 22.5637 19.9411 21.178C21.0388 19.5742 21.4896 18.0236 21.5167 17.9433C21.4812 17.9266 18.4959 16.7829 18.4656 13.3437Z"
                      fill="black"
                    ></path>
                    <path
                      d="M15.7876 3.83263C16.6255 2.8163 17.191 1.40658 17.0376 0C15.8303 0.0490426 14.3674 0.802421 13.5013 1.81666C12.725 2.71613 12.0457 4.15089 12.2273 5.53138C13.5744 5.63573 14.9486 4.84583 15.7876 3.83263Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Download for </span>
                  <span className="font-semibold">macOS</span>
                </div>
              </div>
              <div className="mt-2 p-1 text-sm text-gray-500">
                macOS 10.13 or higher
              </div>
            </div>
          </a> */}
          <a href="https://github.com/achuthhadnoor/capshot_www/releases/download/0.0.1/capshot-0.0.10-arm64-mac.zip">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 align-middle text-black">
                <span className="flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4656 13.3437C18.4375 10.4637 20.8134 9.08218 20.9219 9.01331C19.5853 7.05996 17.5036 6.79179 16.7627 6.76048C14.9919 6.58101 13.3078 7.8029 12.4083 7.8029C11.513 7.8029 10.1242 6.78657 8.65709 6.81266C6.72565 6.84292 4.94551 7.93542 3.95109 9.66443C1.9466 13.1433 3.43979 18.2991 5.39419 21.1237C6.34792 22.5042 7.48842 24.0558 8.98266 23.9985C10.4237 23.9421 10.9673 23.0677 12.7078 23.0677C14.4493 23.0677 14.9377 23.9985 16.4622 23.9703C18.0107 23.9432 18.9936 22.5637 19.9411 21.178C21.0388 19.5742 21.4896 18.0236 21.5167 17.9433C21.4812 17.9266 18.4959 16.7829 18.4656 13.3437Z"
                      fill="black"
                    ></path>
                    <path
                      d="M15.7876 3.83263C16.6255 2.8163 17.191 1.40658 17.0376 0C15.8303 0.0490426 14.3674 0.802421 13.5013 1.81666C12.725 2.71613 12.0457 4.15089 12.2273 5.53138C13.5744 5.63573 14.9486 4.84583 15.7876 3.83263Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Download for </span>
                  <span className="font-semibold">macOS M1</span>
                </div>
              </div>
              <div className="mt-2 p-1 text-sm text-gray-500">
                macOS 10.13 or higher
              </div>
            </div>
          </a>
        </div>
      </section>
      <section className="relative px-4 sm:px-20">
        <h2 className="mt-10 text-center text-3xl">Pricing</h2>
        <div className="mt-5 flex gap-2 rounded-md border border-neutral-800 p-2">
          We price it at a great time
        </div>
      </section>
    </Container>
  )
}

export default Home

{
  /* <div className="py-10 px-2 flex flex-col sm:flex-row">
            <div className="grid sm:grid-rows-3 sm:grid-flow-col grid-flow-row text-gray-400 flex-1 gap-2 sm:gap-0">
            <div>
              <details>
                <summary>Title</summary>
                <p>body</p>
              </details>
            </div>
            <div>
              <details>
                <summary>Title</summary>
                <p>body</p>
              </details>
            </div>
            <div>
              <details>
                <summary>Title</summary>
                <p>body</p>
              </details>
            </div>
            <div>
              <details>
                <summary>Title</summary>
                <p>body</p>
              </details>
            </div>
            <div>
              <details>
                <summary>Title</summary>
                <p>body</p>
              </details>
            </div>
            <div>
              <details>
                <summary>Title</summary>
                <p>body</p>
              </details>
            </div>

            </div>
          </div> */
}

{
  //   Before we can complete this submission, we need some further clarification, please.
  // The submission shows an original price of $5. From our research, there is no pricing table on your website, and appears to be a free offering.
  // To clarify, the original price should be the best offer currently available for the product or service, and your AppSumo sale price must represent the lowest available price for this product.
  // Also, would you mind using your corporate email with the company domain for this submission instead of Gmail? This is to ensure that this is submitted by the owner or an authorized person to list the product.
  // Please contact partners@appsumo.com to clarify these concerns. Looking forward to your response!
}
