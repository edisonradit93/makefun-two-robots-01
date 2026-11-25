export function getElevatorLine(): string {
  const line: string =
    "Your servo whine is soothing; my etiquette module allocated 0.004 seconds for small talk and we are already over budget.";
  const byteLength: number = Buffer.byteLength(line, "utf8");
  if (byteLength >= 200) {
    throw new Error(`Elevator line must be < 200 bytes, got ${byteLength}`);
  }
  return line;
}
