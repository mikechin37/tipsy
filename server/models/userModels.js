const { Pool } = require('pg');

const pool = new Pool({
  connectionString: `postgres://oearvcte:yav5NGqFISpzRt6N4TYIiuSHSMzvPiFX@fanny.db.elephantsql.com/oearvcte`,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
