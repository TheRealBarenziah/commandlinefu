// const commandlinefu = async (arg: string | void) => {
  const commandlinefu = async (arg) => {
  if (!Boolean(arg)) {
    console.log("no arg ?")
  }
  else if (arg === "popular") {
    console.log("popular");
  }
  else if (String(arg).includes("search:")){
    const parsedArg = String(arg).split("search:")[1];
    console.log("search : ", parsedArg)
  }
  else {
    console.log("invalid arg: ", arg)
  }
};

// export default commandlinefu;

commandlinefu();

// https://stackoverflow.com/a/8420905/11894221