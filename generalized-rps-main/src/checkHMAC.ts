import HMACCalculator from "./HMACCalculator";
import { createHmac } from "crypto";

const checkHmac = (hmacCalculator: HMACCalculator, move: string) => {

  console.log("checking HMAC...", "\n");
  console.log("The HMAC provided earlier: ", hmacCalculator.hmac, "\n");
  console.log("The HMAC key: ", hmacCalculator.key, "\n");
  console.log("re-calculating HMAC...");

  const expectedHmac = createHmac("SHA3-256", hmacCalculator.key)
    .update(move)
    .digest("hex");

  console.log("The previously shown hmac should be ", expectedHmac);
  console.log("Are they equal? Well, expectedHmac === prevHmac returns: ", expectedHmac === hmacCalculator.hmac);
  console.log("If it returned true, it means the computer did not made changes to the move", "\n");
};

export default checkHmac;