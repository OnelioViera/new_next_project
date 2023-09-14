import Jumbotron from "./components/Jumbotron"
import PlaceHolder from "./components/PlaceHolder"

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4">
      <Jumbotron />
        <h2 className="font-sans text-4xl font-bold mb-5 mt-8">Home</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eveniet incidunt fuga, nam minus voluptate optio beatae impedit doloribus officiis sapiente accusamus sunt maxime corporis possimus? Odio aliquam aut quaerat veritatis quidem dolorem aperiam assumenda omnis ipsa voluptates. A, suscipit!
        </p>
<PlaceHolder />
<PlaceHolder />
        
      </div>
        
    </main>
  )
}

export default HomePage
