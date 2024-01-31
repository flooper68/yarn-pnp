export function shared() {
  console.log(`shared-b`);

  return "shared" as const;
}
