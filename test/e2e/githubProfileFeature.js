describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title',function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

 it('finds profiles', function() {

   searchBox.sendKeys('Mattia46');
   expect(element(by.binding('user.login')).getText()).
   toEqual('Mattia46');
 });
});


// describe('GitHub profile finder', function() {

//   var searchBox = element(by.model('searchCtrl.searchTerm'))
//   var searchButton = element(by.className('btn'))

//   beforeEach(function() {
//     browser.get('http://localhost:8080');
//   })

//   it('has a title', function() {
//     expect(browser.getTitle()).toEqual('Github user search');
//   });

//   it('finds profiles', function() {
//     searchBox.sendKeys('spike01');
//     //Complete this test using the variables above!
//     expect(element(by.binding('user.login')).getText()).toEqual('spike01');
//   });

// });