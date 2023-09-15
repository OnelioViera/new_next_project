import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <>
    <main className="flex min-h-screen justify-center p-24">
      <div className='mt-10'>
    <SignUp />
    </div>
    </main>
    </>
  )
}

export default SignUpPage