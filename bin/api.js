const app = require('../src/app');
const migr = require('../src/infra/migrations/migration');


if (process.argv[2] === 'migrate') {
    migr.commit();
    console.info('migration finished!');

}
    
if (process.argv[2] === 'rollback') {
    migr.rollback();
    console.info('rollback finished!');
}

if (process.argv[2] === 'seed') {
    migr.seed();
    console.info('seeded')
}

if (process.argv[2] === undefined)
    app.listen(3001, () => {
        console.log(`App listen on port 3001`);
    });

