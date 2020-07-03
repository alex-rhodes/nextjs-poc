# NextJS Data fetch PoC

This PoC is used to demonstrate the ability to fetch data both at build time and on the client.

Using `getStaticProps`, a NextJS page method, data is fetched at build time.
However, some data (like `price` for example) will need to be fetched in "real" time on the client.
