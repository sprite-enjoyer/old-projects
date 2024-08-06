import crypto from "crypto";

class HMACCalculator {

  key: string;

  hmac: string;

  generateKey() {
    this.key = crypto.randomBytes(256).toString("hex");
  }

  calculateHMAC(computerMove: string) {
    this.hmac = crypto.createHmac("SHA3-256", this.key)
      .update(computerMove)
      .digest("hex");
  }

}

export default HMACCalculator;