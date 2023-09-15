import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <>
    <main className="flex min-h-screen justify-center p-24">
      <div className='mt-10'>
    <SignIn />
    </div>
    </main>
    </>
  )
}

export default SignInPage
