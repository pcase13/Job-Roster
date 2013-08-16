/* AutoSort function, used to sort data for sheets
*  entitled "Job Roster" and "Job Archive". Checks if the edited
*  cell was int he sorted column, and if it is, it
*  sorts that column into the list.
*/

function onEdit(event) {
  var sheet=event.source.getActiveSheet();
  var editedCell=sheet.getActiveCell();
  var columnToSortBy=4;
  var tableRange= "A2:F!";
  
  if(editedCell.getColumn() == columnToSortBy){
    var range=sheet.getRange(tableRange);
    range.sort( {column : columnToSortBy} );
  }
}
