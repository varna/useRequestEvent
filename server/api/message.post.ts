export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  return `POST: ${body.message}`;
});
