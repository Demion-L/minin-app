import React from "react";

import { useSearchUsersQuery } from "../store/github/github.api";

export default function HomePage() {
  const [search, setSearch] = React.useState("");
  const { isLoading, isError, data } = useSearchUsersQuery("vladilen");

  React.useEffect(() => {
    console.log(search);
  }, [search]);

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
      <div className='absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>
        Some data
      </div>
    </div>
  );
}
