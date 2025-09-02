import React, { Suspense } from "react";
//import HeavyComponenet from './HeavyComponenet' //ise ese nhi use krna lazy loading me

const HeavyComponenet = React.lazy(() => import("./HeavyComponenet"));

const App = () => {
  return (
    <div className="container">
      <h1>Learning Lazy Loading in React</h1>
      <Suspense
        fallback={<div>loading.........//yha shimmer ui bhi lga skte he</div>}
      >
        <HeavyComponenet />
      </Suspense>
    </div>
  );
};

export default App;
