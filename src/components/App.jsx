import { Profile } from "components/Profile";
import { Statistics } from "components/Statistics";
import { Friends } from "components/Friends";
import { Transaction } from "components/Transaction";
import user from "../dataJSON/user.json";
import statistics from "../dataJSON/statistics.json";
import friends from "../dataJSON/friends.json";
import transactions from "../dataJSON/transactions.json";

export const App = () => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        stats={stats}
      />

      <Statistics statistics={statistics} />

      <Friends friends={friends} />

      <Transaction transactions={transactions} />
    </>
  );
};
