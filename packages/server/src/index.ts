import { shared } from "shared";
import { match } from "ts-pattern";
import z from "zod";

function main() {
  const a = shared();

  z.string().parse(a);

  match(a)
    .with("shared", () => {
      console.log("shared");
    })
    .exhaustive();

  try {
    throw new Error("test");
  } catch (e) {
    console.log(e);
  }

  setInterval(() => {
    console.log("tick");
  }, 1000);
}

main();
