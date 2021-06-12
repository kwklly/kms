import { BIP32Interface } from "bip32";
import { naclKeypairFromSeed, encodeAddress } from "@polkadot/util-crypto";

export class KEYSTORE {
  static getAccount(node: BIP32Interface): string {
    const ss58Format = 0;
    const pk = node.privateKey
      ? new Uint8Array(node.privateKey.buffer)
      : new Uint8Array(32);
    return encodeAddress(
      `0x${Buffer.from(naclKeypairFromSeed(pk).publicKey).toString("hex")}`,
      ss58Format
    );
  }
  /*
  static signTx(node: BIP32Interface, rawTx: RawTx): { [key: string]: any } {
    // ...
  }
  */

  /*
  export signMessage(node: BIP32Interface, msg: string) {
    // ...
  }
  */
}
