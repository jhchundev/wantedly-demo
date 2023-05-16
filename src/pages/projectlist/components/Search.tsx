import React, { useState } from 'react';

interface ProjectFilterInput {
    keyword?: string;
    lookingFor?: string;
}

// const Search: React.FC<ProjectFilterInput> = () => {
//   const [projectFilterInput, setProjectFilterInput] = useState<ProjectFilterInput>({});

//     const handleSearch = () => {
//         const filter: ProjectFilterInput = {};
//         if (projectFilterInput.keyword) {
//           filter.keyword = projectFilterInput.keyword;
//         }
//         getProjects({ variables: {  filter } });
//     };

//     const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setProjectFilterInput((prevFilters) => ({ ...prevFilters, keyword: event.target.value }));
//     };

//     const handleLookingForChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setProjectFilterInput((prevFilters) => ({ ...prevFilters, lookingFor: event.target.value }));
//     };


// 	if (loading) {
// 		return <div>Loading...</div>;
// 	}

// 	if (error) {
// 		return <div>Error: {error.message}</div>;
// 	}
//     return (
//         <div>
//             <input type="text" value={projectFilterInput.keyword || ''} onChange={handleKeywordChange} placeholder="タイトルで検索" />
//             <input type="text" value={projectFilterInput.lookingFor || ''} onChange={handleLookingForChange} placeholder="雇用形態で検索" />
//             <button onClick={handleSearch}>検索</button>
//         </div>
//     );
// };

// export default Search;
