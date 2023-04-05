export const mutationAccount = `
    mutation createAccount($input: AccountInput) {
      createAccount(input: $input) {
        id
      }
    }
`;
