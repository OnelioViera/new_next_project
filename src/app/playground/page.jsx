import Card from '../components/Card';

const playground = [
  {
    title: 'CodePen',
    description: 'CodePen is a social development environment for front-end designers and developers.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111501.png',
    link: 'https://codepen.io/',
  },
  {
    title: 'CodeSandbox',
    description: 'CodeSandbox keeps you in flow by giving you cloud development environments that resume in 1 second.',
    imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-code-sandbox-3445516-2878443.png?f=webp',
    link: 'https://codesandbox.io/',
  },
  {
    title: 'replit',
    description: 'Build software collaboratively with the power of AI, on any device, without spending a second on setup.',
    imageUrl: 'https://icons.iconarchive.com/icons/simpleicons-team/simple/512/replit-icon.png',
    link: 'https://replit.com/',
  },
  // Add more resource objects as needed
];

const PlaygroundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4">
        <h1 className="font-sans text-5xl font-bold my-5">Playground</h1>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          {playground.map((resource, index) => (
            <Card key={index} {...resource} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PlaygroundPage;
