export default async (ctx, next) => {
  console.log("monitor-before");

  await next();

  console.log("monitor-after");
};
