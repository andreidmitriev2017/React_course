const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter((employer) => employer.length > 0 && employers.length != '').map((item) => item.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

const calcCash = (cash = 0) => cash.reduce((a,b) => a + b);

const money = calcCash(cash);

function makeBusiness(cash, emp, owner="Sam", director="Victor", ) {
    
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);

    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsors}`);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness.apply({cash: money, emp: employersNames});