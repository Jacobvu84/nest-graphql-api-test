const request = require('supertest');
const { GRAPHQL_SERVER, TESTBOT_TOKEN } = require('./constant');

const {
  mutationAccount,
  createAccountVar,
} = require('./account');

describe('CRUD Account', () => {
  beforeAll(async () => {});

  // let: mutable vs const: immu
  
  let accountId = {};

  it('should be created account successful', async () => {
    jest.setTimeout(50000);

    return request(GRAPHQL_SERVER)
      .post('/graphql')
      .send({
        operationName: 'createAccount',
        query: mutationAccount,
        variables: createAccountVar,
      })
      .set({
        authorization: TESTBOT_TOKEN
      })
      .expect(200)
      .expect(
        ({
          body: {
            data: { createAccount },
          },
        }) => {
            console.log(createAccount);
            accountId = createAccount.id;
        }
      );
  }, 50000);

  console.log(accountId);

});
