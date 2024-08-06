import { useState, useEffect, RefObject } from "react";
import { CoreUserData } from "./apiTypeDefs";
import { getCoreUsers } from "./functions";

export interface useScrollProps {
  friends: boolean;
  userID?: number;
  lastElementRef?: RefObject<HTMLDivElement>;
}

const useScroll = ({ friends, userID, lastElementRef }: useScrollProps) => {

  const [users, setUsers] = useState<CoreUserData[]>([]);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    setPage(page + 1);
    await getCoreUsers(page, 100, friends, userID)
      .then(newUsers => setUsers([...users, ...newUsers.list]))
      .catch(e => console.error(e));
  };

  const onIntersection: IntersectionObserverCallback = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting) fetchUsers();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && lastElementRef?.current) {
      observer.observe(lastElementRef.current);
    }
    return () => { if (observer) observer.disconnect(); }
  }, [users]);

  return users;
};

export default useScroll;
