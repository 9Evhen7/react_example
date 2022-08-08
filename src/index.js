import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { Friends } from 'components/Friends';
import { Transaction } from 'components/Transaction';
import user from './user.json';
import data from './data.json';
import friends from './friends.json'
import transactions from './transactions.json';
import './index.css';
console.log(data);
console.log(friends);
console.log(transactions)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}/>
    
    <Statistics
      stats={data} />
    
    <Friends
      friends={friends}
    />

    <Transaction
      transactions={transactions}
    />

  </React.StrictMode>
);
