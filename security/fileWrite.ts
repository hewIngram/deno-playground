const encoder = new TextEncoder()

Deno.writeFile('hello.txt', encoder.encode('hello LNUG'))