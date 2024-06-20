export const fetchTeamMembers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=6');
    const data = await response.json();
    return data.results;
  };
  