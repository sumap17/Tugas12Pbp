const axios = require('axios');

//Uji coba POST /user menggunakan express-validator
const testExpressValidator = async () => {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      username: 'validusername',
      email: 'invalid.email.com', //email validator
    });
    console.log('Response from /user (express-validator):', response.data);
  } catch (error) {
    console.log('Error from /user (express-validator):', error.response.data);
  }
};

//ujicoba POST /user-joi menggunakan joi
const testJoiValidator = async () => {
  try {
    const response = await axios.post('http://localhost:3000/user-joi', {
      username: 'validusername',
      email: 'invalid@email.com', //email tidak valid
    });
    console.log('Response from /user-joi (Joi):', response.data);
  } catch (error) {
    console.log('Error from /user-joi (Joi):', error.response.data);
  }
};

//menjalankan ujicoba
const runTests = async () => {
  console.log('Testing /user route with express-validator...');
  await testExpressValidator();

  console.log('\\nTesting /user-joi route with Joi...');
  await testJoiValidator();
};

runTests();