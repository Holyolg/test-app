fetch("https://fakeapi.platzi.com/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
      mutation {
        login(email: "john@mail.com", password: "changeme") {
          access_token
        }
      }
    `,
  }),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
