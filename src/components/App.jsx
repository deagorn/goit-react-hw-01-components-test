import Profile from "./Profile/Profile"
import Statistics from ".//Statistics/Statistics"

import userData from "../constants/user.json"
import dataStatistics from "../constants/data.json"


export const App = () => {
  return (
    <div>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title="Upload stats" stats={dataStatistics} />
    </div>
  );
};
