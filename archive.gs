/*
* Archive.gs
*
* Used to take functions from the roster and
* send them to the archive. Needed so that the
* roster does not get too lengthy and slow, but
* keeps data for archiving reasons.
*/

function archive() {
  var ss=SpreadsheetApp.openById("[ROSTER SPREADSHEET ID]");
  var s=ss.getSheetByName("roster");
  
  var targetSs=SpreadsheetApp.openById("[ARCHIVE SPREADSHEET ID]");
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
