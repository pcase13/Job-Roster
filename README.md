Job-Roster
==========

A library to organize and sort a job roster and a job archive on google spreadsheets. Used for a small retail business that sends jobs to a remote studio. Two spreadsheets are shared by the two locations, "job roster" and "job archive". The layout of the spreadsheets is as follows:

| Job #         | Name          | Notes        | Due Date   | Date Back  | Status       | 
| ------------- | ------------- | ------------ | ---------- | ---------- | ------------ |
| 1337          | Example       | Important!   | 12/3/2012  | 12/2/2012  | Complete     |

This can be customized for other tables, just need to change the table indexes in both onEdit.gs and archive.gs.

+ onEdit.gs should be included in both of the tables.

+ archive.gs should be included on the roster, and set to run on a time interval, 1 week for example.

onEdit.gs
==========

Used to sort the entries put in both spreadsheets. The archive spreadsheet is "edited" when the archive function from the roster sheet is executed, so both sheets should stay organized.

archive.gs
==========

Used to send done jobs from the roster spreadsheet to the archive spreadsheet if their "done date" is entered. Because of the user's need to see recently completed jobs, this does not happen when the user inputs the "done date", but instead runs every week and pushes any done jobs to the archive.
