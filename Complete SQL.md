# <center>Clarusway SQL Session Notes</center>


**<span style="color:Orange text-align: center;">Scripts implemented on Clarusway.db**</span>

---
##### <span style="color:red">SQLite: Display information about the overall database structure.</span>

```sql
 select * from sqlite_master
```

##### Result : Complete list of columns in Customers table is displayed.
---
##### <span style="color:red">SQLite: Display columns and related data?</span>

```sql
pragma table_info(customers)
```

##### Result : Complete list of columns in Customers table is displayed.
---
##### <span style="color:red">SQLite: How can we retrieve the total amount of tables in a database?</span>

```sql
select count(*) FROM sqlite_master where type = 'table'; 
```
##### Result : 13
---
##### <span style="color:red">SQLite: How can we retrieve the column list in a table?</span>
```sql
select name from pragma_table_info('customers') order by cid
```
#### Result : 13
---

##### <span style="color:red">MySQL/MSSQL: How can we retrieve the column list in a table?</span>
```sql
select * from INFORMATION_SCHEMA.COLUMNS
  where COLUMN_NAME like '%faculty%'
  order by TABLE_NAME <br>
```
##### Result : 13
---

##### <span style="color:red">SQLite: How to retrieve all columns and all rows in a table, a complete view of the table?</span>
```sql
select count(*) from pragma_table_info('albums');
```
##### Result : 3
---
##### <span style="color:red">How to retrieve all columns and all rows in a table, a complete view of the table?</span>
```sql
select * from invoices;
```
##### Result : A complete table content is displayed.
---
##### <span style="color:red">General: How do we select a single column from a table?</span>
```sql
select invoiceid from invoices;
```
##### Result : Only invoiceid column contents are displayed.
---
##### <span style="color:red">General: How do we order the items by total column in the previous query?</span>
```sql
select invoiceID from invoices order by total asc;
```
##### Result : Only invoiceid column contents are displayed but ordered in an ASCENDING form. 
##### Info   : We can also view the contents in a DESCENDING form by using "desc" keyword instead of "asc" keyword in the query, please try it. 
---

##### <span style="color:red">General: How do we select multiple columns, the desired columns from a table?</span>
```sql
select invoiceid, BillingCity, BillingCountry from invoices;
```
##### Result : Only invoiceid, BillingCity, BillingCountry column contents are displayed.
##### Info   : We can ask any existing column from SQL. If we need all columns we ask it with "*".
---
##### <span style="color:red">SQLite: Dealing with DateTime values</span>
```sql
select * from invoices;
select 
invoiceId, 
CustomerId,
InvoiceDate, 
strftime('%Y', InvoiceDate) as BillingYear,
strftime('%m', InvoiceDate) as BillingMonth,
strftime('%d', InvoiceDate) as BillingDay,
strftime('%H', InvoiceDate) as BillingHour,
strftime('%M', InvoiceDate) as BillingMinute,
strftime('%S', InvoiceDate) as BillingSecond,
BillingAddress, 
BillingCity, 
BillingState, 
BillingCountry,
BillingPostalCode,
Total from invoices
```
##### Result : Datetime values parsed displayed.
---
##### <span style="color:red">General: How do we select multiple columns, the desired columns from a table?</span>
```sql
select invoiceid, BillingCity, BillingCountry from invoices;
```
##### Result : Only invoiceid, BillingCity, BillingCountry column contents are displayed.
##### Info   : We can ask any existing column from SQL. If we need all columns we ask it with "*".
---

##### <span style="color:red">General: How can we give an alias to a column?</span>
```sql
select invoiceid as number,  BillingCountry as origin from invoices;
```
##### Result : We receive a resultset including columns with titles, number and origin. 
---

##### <span style="color:red">General: How many different cities do we have in invoices table?</span>
```sql
select distinct BillingCity from invoices;
```
##### Result : The result is a unique list of cities. 
---

##### <span style="color:red">General: How many different unit_price values do exist in invoice_items? What is the SQL statement for it?</span>
```sql 
select count(distinct unitprice) as DistinctUnitPrice from invoice_items
```
##### Result : 2 different values.
---

##### <span style="color:red">General: List all values of the employees who live in the city of Calgary, write SQL for it.</span>
```sql 
select * from employees where city = "Calgary"
```
##### Result : 2 different values.
---

##### <span style="color:red">General: In the previous example how many rows do we get if we ask it with "CalGary"</span>
```sql 
select * from employees where city = "CalGary"
```
##### Result : No rows.
---


##### <span style="color:red">General: What is the Title of the 5th employee for "select * from employees where city = "Calgary"</span>
```sql 
select * from employees where city = "Calgary"
```
##### Result : IT Manager
---


##### <span style="color:red">General: Write a query that brings all values of Total column, greater than 13.00 from invoices table.</span>
```sql 
select Total from invoices where total > 13
```
##### Result : 61 rows of total column records. 
---

##### <span style="color:red">General: Write a query that brings all values that have less or equal value of Total 5.94 from invoices table, how many records?</span>
```sql 
select * from invoices where Total <= 5.94
```
##### Result : 288 invoice records.
---


##### <span style="color:red">General: Bring all columns of Customers excluding customers from Brussels</span>
```sql 
select * from customers where city <> "Brussels"
```
##### Result : 58 Records.
---


##### <span style="color:red">General: Bring all columns of Customers excluding customers from Brussels, Prague and Vienne</span>
```sql 
select * from customers where city not in ("Brussels", "Prague", "Vienne")
```
##### Result : 55 Records.
---


##### <span style="color:red">General: How many customers do exist in Customers table that are not from city of Brussels and who has Customer ID greater than 20?</span>
```sql 
select * from customers where city <> "Brussels" and customerid > 20
```
##### Result: 39 Records
---



##### <span style="color:red">General: Write a query that brings a list of all customers that are from City Rome or Country Spain.</span>
```sql 
select * from customers where City = "Rome" OR Country = "Spain"
```
##### Result: 2 Customers
---



##### <span style="color:red">General: Write a query that brings all infromation of employee whose FirstName is "Steve"</span>
```sql 
select * from employees where Firstname = "Steve
```
##### Result : 1 row of information
---



##### <span style="color:red">General:  Make a unique (non duplicated) list of countries of customers table.</span>
```sql 
select distinct country from customers,  or we could say : select distinct(country) from customers
```
##### Result : 24 rows of different countries.
---


##### <span style="color:red">General: What changes if we use "select distinct(country), FirstName, LastName from customers" query, can distinct keyword work as expected?</span>
```sql 
select distinct(country), FirstName, LastName from customers
```
##### Result : 59 rows but with repeated items.
---


##### <span style="color:red">General: List all customers who have "j" in their lastnames.</span>
```sql 
select * from customers where Lastname like "%j%"
```
##### Result : 4 rows
---


##### <span style="color:red">General: Write an SQL that brings FIRST 5 records from invoice_items table only</span>
```sql 
select * from invoices limit 5
```
##### Result : Top 5 records
---


##### <span style="color:red">General: Write an SQL that brings LAST 5 records from invoice_items table only</span>
```sql 
select * from invoices order by invoiceID DESC limit 5
```
##### Result : Last 5 records
---


##### <span style="color:red">Bring all invoices that have total in between 2 and 5.94</span>
```sql 
select * from invoices where total between 2 and 5.94
```
##### Result : 120 records
---



##### <span style="color:red">Bring all invoices that have BillingCity Paris, Dublin and London by using in operator, and where their total is > 1.98</span>
```sql 
select * from invoices where BillingCity in ("Paris", "Dublin", "London") and total > 1.98
```
##### Result : 21 records
---


##### <span style="color:red">General: Create a view from previous SQL query</span>
```sql 
CREATE VIEW [EuropeCentralSalesReport] AS select * from invoices where BillingCity in ("Paris", "Dublin", "London") and total > 1.98;
select * from EuropeCentralSalesReport
```
##### Result : 21 records from EuropeCentralSalesReport
---


##### <span style="color:red">General: Write a query that brings all customers having "e" in their lastname's second letter who also lives in Paris only</span>
```sql 
SELECT * FROM customers where lastname like "_e%" and City="Paris"
```
##### Result : 2 Customers
---


##### <span style="color:red">General: Get the list of customers, order it by their FirstName descending, LastName ascending form.</span>
```sql 
select * from customers order by FirstName desc, LastName asc
```
##### Result : 59 records, observe the updates in LastName especially.
---


##### <span style="color:red">General: Select the minimum value of Total column in invoices table.</span>
```sql 
select min(total) from invoices
```
##### Result : 2009-01-01 00:00:00
---


##### <span style="color:red">General: What is the sum of all Total colums in invoices table.</span>
```sql 
select sum(invoices.Total) from invoices
```
##### Result : 2330.47 
---



##### <span style="color:red">General: How to write a select query that calculates : ((4+5)*10)/3, give it an alias as well.</span>
```sql 
select ((4+5)*10)/3 as MyFinalResult
```
##### Result : 30
---


##### <span style="color:red">General: Write a query that brings the result of min+max values of Total field in invoices table.</span>
```sql 
select min(invoices.Total) + max(invoices.Total) from invoices 
```
##### Result : 27.19
---



##### <span style="color:red">General: What is the average value of Total field in invoices table? </span>
```sql 
select AVG(Total) from invoices, or after rounding = SELECT round(avg(Total),3) from invoices
```
##### Result : 5.65648058252428
---


##### <span style="color:red">General: How many distinct Cities are the customers located? </span>
```sql 
select count(distinct city) from customers
```
##### Result : 53
---


##### <span style="color:red">General: Find the sum of totals of all Cities in invoices.</span>
```sql 
select CustomerId, BillingCity, sum(invoices.Total) from invoices GROUP by invoices.BillingCity
```
##### Result : 53 cities and their corresponding sums.
---


##### <span style="color:red">General: Find the maximum values of Total column by the countries.</span>
```sql 
select CustomerId, BillingCountry, max(invoices.Total) from invoices Group by invoices.BillingCountry
```
##### Result : 24 countries and their corresponding maximum values.
---


##### <span style="color:red">General: Generate a list that displays Country, count(Country) from customers table. </span>
```sql 
select Country, count(Country) from customers group by Customers.Country
```
##### Result : 24 countries with the quantities. 
---


##### <span style="color:red">General: Join 2 tables to display the customer names in invoices table.</span>
```sql 
select invoices.InvoiceId, customers.firstname, customers.lastname, invoices.BillingCity, invoices.Total, invoices.InvoiceDate from customers join invoices on customers.CustomerId = invoices.CustomerId
	    order by invoices.InvoiceId asc
```
##### Result : 412 invoice records with the actual customer names. 
---


##### <span style="color:red">General: Display a list of tracks of tracks.TrackId, Name, albums.Title, media_types.Name, genres.Name, tracks.composer, tracks.unitprice and order it by TrackId ascending  </span>
```sql 
select tracks.TrackId, 
         tracks.name TrackName, 
         albums.title AlbumTitle, 
         media_types.Name MediaType,
         genres.Name GenreName, 
         tracks.composer, 
         tracks.UnitPrice
         from tracks 
				join albums on albums.AlbumId = tracks.AlbumId 
				join genres on tracks.GenreId = genres.GenreId
				join media_types on media_types.MediaTypeId = tracks.MediaTypeId
		order by tracks.TrackId asc 
```
##### Result : 3503 records of joined data.
---


##### <span style="color:red">General: Create a view from previous SQL query.</span>
```sql 
CREATE VIEW [CompleteTracksReport] AS 
         select tracks.TrackId, 
         tracks.name TrackName, 
         albums.title AlbumTitle, 
         media_types.Name MediaType,
         genres.Name GenreName, 
         tracks.composer, 
         tracks.UnitPrice
         from tracks 
				join albums on albums.AlbumId = tracks.AlbumId 
				join genres on tracks.GenreId = genres.GenreId
				join media_types on media_types.MediaTypeId = tracks.MediaTypeId
		order by tracks.TrackId asc ;

         select * from CompleteTracksReport
```
##### Result : 3503 records from CompleteTracksReport
---



##### <span style="color:red">General: Display sum, avg, min, max of Total column in invoices tables with their aliases.</span>
```sql 
select sum(total), avg(total), min(total), max(total) from invoices. (Give alias to all)
-- Alternatively:  select sum(total), ROUND(avg(total),2) as AVERAGE, min(total), max(total) from invoices
```
##### Result : 2330.47	5.65648058252428	0.33		26.86
---



##### <span style="color:red">General: Create a view from previous SQL query</span>
```sql 
CREATE VIEW [GeneralSalesReport] AS select sum(total), ROUND(avg(total),2) as AVERAGE, min(total), max(total) from invoices
         select * from GeneralSalesReport
```
##### Result : 1 row of general report
---


##### <span style="color:red">General: Find total count of composer column in tracks</span>
```sql 
select count(composer) from tracks
select count(distinct composer) from tracks
```
##### Result : 2526, 853
---


##### <span style="color:red">General: Find all tracks where composer starts with "Audio"</span>
```sql 
select * from tracks where composer like 'Audio%'
```
##### Result : 14 records
---


##### <span style="color:red">General: Find all invoices for BillingCity in a list of "Paris", "London", "Toronto"</span>
```sql 
select * from invoices where BillingCity in ('Paris', 'London', 'Toronto') order by BillingCity ASC
```
##### Result : 35 records
---


##### <span style="color:red">General: Find all the records in invoices table where Total is not in between 3.96 and 8.91, order Total in Ascending form, limit the results to 5.</span>
```sql 
select * from invoices where total not between 3.96 and 8.91 order by Total ASC limit 5
```
##### Result : 5 requested records.
---



##### <span style="color:red">General: Display a list of customers under a condition: if any customer has e-mail in list = ('bjorn.hansen@yahoo.no', 'kara.nielsen@jubii.dk')</span>
```sql 
select * from customers where exists (select * from customers where email in ('bjorn.hansen@yahoo.no', 'kara.nielsen@jubii.dk'))
-- Exists keyword returns true if that case is met. 
```
##### Result : All the list of customers displayed because Exists returns true.
---


##### <span style="color:red">General: select albums.title from albums table, using the UNION keyword for artistID 1 and 5 </span>
```sql 
select albums.title from albums where artistID = 1 UNION select albums.title from albums where artistID = 5
```
##### Result : 3 album titles received.
---


##### <span style="color:red">General: Display a condition where CASE usage is implemented.</span>
```sql 
select InvoiceId, invoices.Total, 
	    CASE 
     		WHEN invoices.Total < 1.98 THEN "The total is less than 1.98"
     		WHEN invoices.Total < 8.91 THEN "The total is greater than 1.98 but less than 8.91"
	 		ELSE "Out of requested range"
	    END AS TotalPaymentText
		from invoices
```
##### Result : 412 records with TotalPaymentText associated.
---


##### <span style="color:red">General: Create a VIEW for the SQL query above with name ConditionalInvoiceReport</span>
```sql 
CREATE VIEW [ConditionalInvoiceReport] AS select InvoiceId, invoices.Total, 
	    CASE 
     		WHEN invoices.Total < 1.98 THEN "The total is less than 1.98"
     		WHEN invoices.Total < 8.91 THEN "The total is greater than 1.98 but less than 8.91"
	 		ELSE "Out of requested range"
	    END AS TotalPaymentText
		from invoices;

         select * from ConditionalInvoiceReport
```
##### Result : 412 records.
---


##### <span style="color:red">General: Find the sum of totals of all Cities in invoices.</span>
```sql 
select CustomerId, BillingCity, sum(invoices.Total) as InvoiceTotal from invoices GROUP by invoices.BillingCity
```
##### Result : 53 records displayed
---


##### <span style="color:red">General: Generate a list that displays Country, count(Country) from customers table.</span>
```sql 
select Country, count(Country) from customers group by Customers.Country
```
##### Result : 24 Countries listed.
---


##### <span style="color:red">General:  Create a list of composers from tracks table which displays the total amount for column UnitPrice.</span>
```sql 
select composer, sum(unitPrice) from tracks group by Composer 
select composer, sum(unitPrice) from tracks group by Composer order by unitPrice
select composer, Round(sum(unitPrice),2) as TotalPrice from tracks group by Composer order by TotalPrice asc  
```
##### Result : 854 records
---


##### <span style="color:red">General: Join 2 tables to display the customer names in invoices table.</span>
```sql 
select invoices.InvoiceId, customers.firstname, customers.lastname,invoices.BillingCity, invoices.Total, invoices.InvoiceDate from customers 
         join invoices on customers.CustomerId = invoices.CustomerId order by invoices.InvoiceId asc 
```
##### Result : 412 records.
---


##### <span style="color:red">General: Join customers and invoices, display the customer info for the invoices.
</span>

```sql 
select customers.FirstName, customers.LastName, invoices.BillingCity, invoices.BillingCountry, invoices.total from customers 
         join invoices on customers.CustomerId = invoices.CustomerId
```
##### Result : 412 records
---



##### <span style="color:red">General: Get a list of tracks table with actual Album name, MediaType Name, Genre Name by joining 3 tables.
</span>

```sql 
select TrackId, tracks.name, albums.Title, media_types.Name, genres.Name, Composer, UnitPrice
         from tracks 
	      join albums on albums.AlbumId = tracks.AlbumId
           join media_types on media_types.MediaTypeId = tracks.MediaTypeId 
           join genres on tracks.GenreId = genres.GenreId   
```
##### Result : 3503 records
---


##### <span style="color:red">General: Display a list of tracks of tracks.TrackId, Name, albums.Title, media_types.Name, genres.Name, tracks.composer, tracks.unitprice and order it by TrackId ascending.
</span>

```sql 
select tracks.TrackId, 
                tracks.name TrackName, 
                albums.title AlbumTitle, 
                media_types.Name MediaType,
                genres.Name GenreName, 
                tracks.composer, 
                tracks.UnitPrice
         from tracks 
	                join albums on albums.AlbumId = tracks.AlbumId 
				  join genres on tracks.GenreId = genres.GenreId
				  join media_types on media_types.MediaTypeId = tracks.MediaTypeId
	    order by tracks.TrackId asc  
```
##### Result : 3503 records
---




##### <span style="color:red">General: Display CustomerID, InvoiceDate from invoices for total column in between 1.98 and 5.94, use sub-query. 
</span>

```sql 
select CustomerId, InvoiceDate from invoices
                where total in (select invoices.total from invoices where invoices.total between 1.98 and 5.94) 
```
##### Result : 233
---


##### <span style="color:red">General: Bring all customer invoices for Customers who live in Canada by using sub-query. 
</span>

```sql 
select * from invoices where customerid in (select customerid from customers where country = 'Canada')
```
##### Result : 56 records
---


##### <span style="color:red">General: Create a VIEW of invoices, recorded by the customers who live in canada. 
</span>

```sql 
CREATE VIEW [CanadianCustomers] AS select * from invoices where customerid in (select customerid from customers where country = 'Canada')
         select * from CanadianCustomers
```
##### Result : 56 records.
---


##### <span style="color:red">General: Select invoices which have higher values than the average of USA.
</span>

```sql 
select * from invoices where invoices.Total > (select avg(invoices.Total) from invoices where BillingCountry = 'USA') 
```
##### Result : 178 records
---


##### <span style="color:red">General: Save the above query as a view.
</span>

```sql 
CREATE VIEW [Sales_AboveUSA_Average] AS select * from invoices where invoices.Total > (select avg(invoices.Total) from invoices where BillingCountry = 'USA');
         select * from Sales_AboveUSA_Average 
```
##### Result : 178 records
---


##### <span style="color:red">General: Find Firstname, Lastname from consumers table, with the corresponding Support Resresentative names from Customers and employees tables, save as a view
</span>

```sql 
select customers.FirstName, customers.LastName, employees.FirstName as Representitive from customers join employees on customers.SupportRepID = employees.EmployeeId;
         CREATE VIEW [Customers_With_Representitives] as  
             select customers.FirstName, customers.LastName, employees.FirstName as Representitive from customers join employees on customers.SupportRepID = employees.EmployeeId;
         select * from Customers_With_Representitives
```
##### Result : 59 records
---


##### <span style="color:red">General: Create a table that keeps track of Logs in our web application, also Exceptions table. 
</span>

```sql 
CREATE TABLE "logs" (
	"id"	INTEGER NOT NULL,
	"Date"	TEXT,
	"Info"	TEXT,
    "IssuedBy" TEXT	,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE "ExceptionDetails" (
	"id"	INTEGER NOT NULL,
	"logID"	INTEGER,
	"ExceptionDetail"	TEXT,
	"DateTime"	TEXT,
	 PRIMARY KEY("id" AUTOINCREMENT)
);
```
##### Result : Tables created
---


##### <span style="color:red">General: Insert a record into logs table with random values.
</span>

```sql 
insert into logs (date, info, issuedBy) values ('2022','This is a log', 'User Mary');
```
##### Result : Record saved in DB.
---


##### <span style="color:red">General: Update the inserted record in logs table
</span>

```sql 
update logs set issuedBy = 'User John' where id = 1
```
##### Result : Record updated in DB.
---



##### <span style="color:red">General: Create a table that keeps track of SystemLogs in our web application. 
</span>

```sql 
CREATE TABLE "SystemLog" (
	"id"	INTEGER NOT NULL,
	"LogDate"	TEXT,
	"ModuleName"	TEXT,
	"LoggedExceptions"	TEXT,
	"StackTrace"	TEXT,
	"EventDateTime"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
```
##### Result : Table Created
---



##### <span style="color:red">General: Insert some data in SystemLog table.
</span>

```sql 
insert into SystemLog (LogDate,
                       ModuleName,	   
					   LoggedExceptions,
					   StackTrace, 
					   EventDateTime) 
                       values (
					   '2022',
					   'This is a log', 
					   'User Mary',
					   'Stack trace details',
					   date()
					   );
```
##### Result : Record created.
---



##### <span style="color:red">General: Update the record in the table.
</span>

```sql 
update SystemLog set EventDateTime = '2000',
                     StackTrace = 'This is a StackTrace info' 
                     where SystemLog.id = 1
```
##### Result : Record updated.
---


##### <span style="color:red">General: Delete the record in the table.
</span>

```sql 
delete from logs where id = 1
```
##### Result : Record deleted.
---



##### <span style="color:red">General: Insert some data in SystemLog table.
</span>

```sql 
insert into SystemLog(LogDate,ModuleName,LoggedExceptions,StackTrace)
 		values ('27.06.2022 13:00:00', 'MainModule',
 		'Stack out of memory','Trace details ...');

```
##### Result : Record created.
---

##### <span style="color:red">General: Lets just write a long sql query that will create a table and do some operations on it. 
</span>

```sql 
CREATE TABLE "SystemLog" (
	"id"	INTEGER NOT NULL,
	"LogDate"	TEXT,
	"ModuleName"	TEXT,
	"Exception"	TEXT,
	"StackTrace"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
insert into SystemLog(LogDate,ModuleName,Exception,StackTrace) values ('27.06.2022 13:00:00', 'MainModule', 'Stack out of memory','Trace details ...');
insert into SystemLog(LogDate,ModuleName,Exception,StackTrace) values ('27.06.2022 13:33:00', 'MainModule', 'Running out of disk space','Trace details ...');
insert into SystemLog(LogDate,ModuleName,Exception,StackTrace) values ('27.06.2022 13:33:00', 'MainModule', 'RAM not enough','Trace details ...');
insert into SystemLog(LogDate,ModuleName,Exception,StackTrace) values ('27.06.2022 13:33:00', 'MainModule', 'Critical Error in module','Trace details ...');
alter table SystemLog rename column Exception to LoggedExceptions;
alter table SystemLog add column EventDateTime;
update SystemLog set EventDateTime = datetime('now');

```
##### Result : Requested operations completed on the table.
---

##### <span style="color:red">General: How to delete several rows? 
</span>

```sql 
delete from invoices where invoiceId > 500
```
##### Records having id > 500 are deleted.
---


##### <span style="color:red">General: Create a View of comparative sales by countries.
</span>

```sql 
Drop View CountriesComparative;
CREATE VIEW [CountriesComparative] AS             
            SELECT BillingCountry, sum(Total) from invoices where BillingCountry = 'USA'
		    Union
              Select BillingCountry, sum(Total) from invoices where BillingCountry = 'Germany' 
			UNION
			  Select BillingCountry, sum(Total) from invoices where BillingCountry = 'Norway' 
			UNION
			  Select BillingCountry, sum(Total) from invoices where BillingCountry = 'Belgium' 
			UNION
			  Select BillingCountry, sum(Total) from invoices where BillingCountry = 'Canada' 
		    order by BillingCountry;
select * from CountriesComparative;
```
##### Result : Requested view has been created.
---


##### <span style="color:red">General: Create a View of comparative overall sales by countries.
</span>

```sql 
Drop View CountriesComparativeOverall;
CREATE VIEW [CountriesComparativeOverall] AS             
            SELECT sum(Total) as OverallTotal, 
			      (Select sum(Total) from invoices where BillingCountry = 'USA') as USAOverallTotal, 
				  (Select sum(Total) from invoices where BillingCountry = 'Germany') as GermanyOverallTotal,
				  (Select sum(Total) from invoices where BillingCountry = 'Norway') as NorwayOverallTotal,
				  (Select sum(Total) from invoices where BillingCountry = 'Belgium') as BelgiumOverallTotal
			from invoices;
select * from CountriesComparativeOverall;
```
##### Result : Requested view has been created.
---


##### <span style="color:red">General: Generate a list that displays which employee reporting to which manager? 
</span>

```sql 
select EmployeeID, Firstname, Lastname, 
case 
     WHEN employees.ReportsTo = 1 THEN "Reports to General Manager"
     WHEN employees.ReportsTo = 2 THEN "Reports to Sales Manager"
     WHEN employees.ReportsTo = 3 THEN "Reports to Sales Support Agent Jane Peacock"
     WHEN employees.ReportsTo = 4 THEN "Reports to Sales Manager Agent Margareth Park"
     WHEN employees.ReportsTo = 5 THEN "Reports to Sales Manager Steve JohnSon"
     WHEN employees.ReportsTo = 6 THEN "Reports to IT Manager"
     WHEN employees.ReportsTo = 7 THEN "Reports to IT Staff King Robert"
     WHEN employees.ReportsTo = 8 THEN "Reports to IT Laura Callahan"
     WHEN (employees.ReportsTo = 9 OR employees.ReportsTo = 10) THEN "Out of scope"
	ELSE "Reports no-one"
END AS ReportsTo
from Employees
```
##### Result : 8 Employees listed with extensive explanations.
---


## <span style="color:red">PostgreSQL Workout
</span>

```sql 
update orders set ship_region = 'London' where order_id = 1
---
Create a join query in PostgreSQL
select orders.order_id, 
       customers.customer_Id as CustomerID,
	   orders.order_date
	   from orders
	   join customers on customers.customer_id = orders.customer_id
---
Create a view in PostgreSQL : 
CREATE VIEW CountriesComparative AS           (The difference is with Sqlite, [CountriesComparative])   
            SELECT sum(Freight) as OverallTotal, 
			      (Select sum(Freight) from orders where ship_country = 'USA') as USAOverallTotal, 
				  (Select sum(Freight) from orders where ship_country = 'Germany') as GermanyOverallTotal,
				  (Select sum(Freight) from orders where ship_country = 'France') as FranceOverallTotal,
				  (Select sum(Freight) from orders where ship_country = 'Sweeden') as SweedenOverallTotal
			from orders 
---
PostgreSQL : SELECT * FROM public.countriescomparative
---
CREATE TABLE "logs" (
	"id"	INTEGER NOT NULL,
	"Date"	TEXT,
	"Info"	TEXT,
    "IssuedBy" TEXT	
	PRIMARY KEY("id" AUTOINCREMENT)
);
---
CREATE TABLE "ExceptionDetails" (
	"id"	INTEGER NOT NULL,
	"logID"	INTEGER,
	"ExceptionDetail"	TEXT,
	"DateTime"	TEXT,
	 PRIMARY KEY("id")
);
---
PostgreSQL demonstration:
select order_Id from orders order by freight asc
---
select count(distinct ship_city) as DistinctCities from orders
---
select distinct ship_city as DistinctCities from orders order by ship_city
```
---


