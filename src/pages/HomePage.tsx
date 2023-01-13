import React from "react";

import { useSearchUsersQuery } from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";

export default function HomePage() {
  const [search, setSearch] = React.useState("");
  const [dropdown, setDropdown] = React.useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  React.useEffect(() => {
    if (data) {
      setDropdown(debounced.length > 3 && data.length > 0);
    }
  }, [debounced, data]);

  const clickHendler = (username: string) => {};

  return (
    <div className='flex fustify-center pt-10 mx-auto h-screen w-screen'>
      {isError && (
        <p className='text-center text-red-600'>Smth went wrong...</p>
      )}
      <div className='relative w-[560px]'>
        <input
          type='text'
          className='border py-2 px-4 w-full h-[42px] mb-2'
          placeholder='Github Username'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {dropdown && (
        <ul className='list-none absolute top-[42px] overflof-y-scroll left-0 right-0 max-h-[200px] shadow-md bg-white'>
          {isLoading && <p className='text-center'>Loading...</p>}
          {data?.map((user) => (
            <li
              key={user.id}
              onClick={() => clickHendler(user.login)}
              className='py-2 px-4 hover:bg-gray-500 hover'>
              {user.login}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
