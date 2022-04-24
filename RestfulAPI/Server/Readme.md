# Database Create

> Create Database
```
CREATE DATABASE AMR;
```

> Create Table
```
USE AMR;
CREATE TABLE Robots(Id int , Name varchar(50));
```

> Select Table
```
SELECT * FROM Robots;
```

> Change Password
```
When you forgot your 'PASSWORD' , Open a new sql file and insert the sql and execute.

use mysql;
SET SQL_SAFE_UPDATES = 0;
update user set password=password('asd0986458212') where user='root';

* Remember , this is very dangerous , you should think carefully and don't forgot use safety mode to unlock.
```

> Store Procedule
```

```