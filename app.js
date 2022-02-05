var profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    profileDataArgs.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);