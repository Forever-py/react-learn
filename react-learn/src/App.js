import React from 'react'
import {A, B} from './componenets/Comp'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin';

const ALog =withLog(A);
const BLog =withLog(B);
const ALogin =withLogin(ALog);
const BLogin =withLogin(BLog);
export default function App() {
  return (
    <div>
      <ALog a={1}/>
      <BLog a={2}/>
      <ALogin a={1} isLogin={false}/>
      <BLogin a={2} isLogin={true}/>
    </div>
  )
}
