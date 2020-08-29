import performRequest from "./performRequests";
import IResponseObject from "./IResponseObject";

const commandlinefu = async (
  arg: string | void,
): Promise<IResponseObject | IResponseObject[] | Error> => {
  if (!Boolean(arg)) {
    return await performRequest("random/json", true);
  } else if (arg === "popular") {
    return await performRequest("browse/sort-by-votes/json", false);
  } else if (String(arg).includes("search:")) {
    const parsedArg = String(arg).split("search:")[1];
    const toBase64 = Buffer.from(String(parsedArg)).toString("base64");
    const formatedArg = `matching/${parsedArg}/${toBase64}/json`;
    return await performRequest(formatedArg, false);
  } else {
    return new Error("Invalid argument. Did you pass a valid string ?");
  }
};

export default commandlinefu;
