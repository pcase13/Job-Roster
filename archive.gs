function archive() {
  var ss=SpreadsheetApp.openById("0AroBvchobu2edGZDZ3JPcVI3OEJXUGJ0X25HX1hTT0E");
  var s=ss.getSheetByName("roster");
  
  var targetSs=SpreadsheetApp.openById("0AroBvchobu2edHNXQ3ZUQjI5TWJtWWZwa1UtcExPNnc");
  var targetS=targetSs.getSheetByName("Sheet1");
  
  var length=s.getLastRow();
  var j=2;
  while (j<=length) {
    var range=s.getRange("A" + j + ":F" + j);
    var cell=range.getCell(1,5);
    if(!cell.isBlank()){
      var values=range.getValues();
      var targetRow=targetS.getLastRow()+1;
      var targetRange=targetS.getRange("A" + targetRow + ":F" + targetRow);
      targetRange.setValues(values);
      range.clear();
    }
    j=j+1;
  }
  var range=s.getRange("A2:F!");
  range.sort( {column : 4} );
}
