const listener = Deno.listen({ port: 8080 });
console.log("listening on 0.0.0.0:8080");
while (true) {
  const conn = await listener.accept();
  Deno.copy(conn, conn);
}