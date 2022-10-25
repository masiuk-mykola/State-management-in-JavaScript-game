export function drawStatustext(context, input) {
  context.font = "30px Helvetica";
  context.fillText("Last input: " + input.lastkey, 20, 50);
}
