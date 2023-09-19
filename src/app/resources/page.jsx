export const metadata = {
  title: 'Resources',
}

const ResourcesPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4">
        <h1 className="font-sans text-5xl font-bold my-5">Resources</h1>
        <div class="grid-cols-1 sm:grid md:grid-cols-3 ">

          {/* Card 1 */}
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div class="p-6">
              <a href="#!">
                <img
                  class="rounded-t-lg w-20 justify-self-stretch mx-auto mb-4"
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111501.png"
                  alt="CodePen" />
              </a>
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                CodePen
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                CodePen is a social development environment for front-end designers and developers. 
              </p>
              <a href="https://codepen.io/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                CodePen
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div class="p-6">
              <a href="#!">
                <img
                  class="rounded-t-lg w-20 justify-self-stretch mx-auto mb-4"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-code-sandbox-3445516-2878443.png?f=webp"
                  alt="CodeSandbox" />
              </a>
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                CodeSandbox
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                CodeSandbox keeps you in flow by giving you cloud development environments that resume in 1 second.
              </p>
              <a href="https://codesandbox.io/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                CodeSandbox
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div class="p-6">
              <a href="#!">
                <img
                  class="rounded-t-lg w-20 justify-self-stretch mx-auto mb-4"
                  src="https://icons.iconarchive.com/icons/simpleicons-team/simple/512/replit-icon.png"
                  alt="replit" />
              </a>
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                replit
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Build software collaboratively with the power of AI, on any device, without spending a second on setup
              </p>
              <a href="https://replit.com/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                replit
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          {/* <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div class="p-6">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="https://codepen.io/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  )
}

export default ResourcesPage