import "dotenv/config";
import * as mongoose from "mongoose";
import { Currencies } from "./models";

// betLimit caps a sports bet's potential payout (sports/index.ts) and the
// total active stake (base.ts getActiveBet). 0 rejects every bet.
const NEW_BET_LIMIT = 1_000_000_000;

const run = async () => {
  await mongoose.connect(process.env.DATABASE as string);

  const result = await Currencies.updateMany(
    {},
    { $set: { betLimit: NEW_BET_LIMIT } }
  );
  console.log("currencies updated:", result.modifiedCount);

  const currencies = await Currencies.find(
    {},
    { symbol: 1, minBet: 1, maxBet: 1, betLimit: 1 }
  );
  for (const c of currencies as any[]) {
    console.log(
      `${c.symbol}: minBet=${c.minBet} maxBet=${c.maxBet} betLimit=${c.betLimit}`
    );
  }

  await mongoose.disconnect();
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
