import db from '../../data/db';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  // var doc = { hello: 'world'
  //              , n: 5
  //              , today: new Date()
  //              , nedbIsAwesome: true
  //              , notthere: null
  //              , notToBeSaved: undefined  // Will not be saved
  //              , fruits: [ 'apple', 'orange', 'pear' ]
  //              , infos: { name: 'nedb' }
  //              };
 
  // db.insert(doc, function (err, newDoc) {
  //   res.statusCode = 200
  //   res.json(newDoc);
  // });
  db.find({}, function (err, docs) {
    res.json(docs);
  });
}
