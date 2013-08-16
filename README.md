Job-Roster
==========

A library to organize and sort a job roster and a job archive on google spreadsheets. Used for a small retail business that sends jobs to a remote studio. Two spreadsheets are shared by the two locations, "job roster" and "job archive". The layout of the spreadsheets is as follows:



onEdit.gs
==========

Used to sort the entries put in both spreadsheets. The archive spreadsheet is "edited" when the archive function from the roster sheet is executed, so both sheets should stay organized.

archive.gs
==========

Used to send done jobs from the roster spreadsheet to the archive spreadsheet if their "done date" is entered. Because of the user's need to see recently completed jobs, this does not happen when the user inputs the "done date", but instead runs every week and pushes any done jobs to the archive.
