# SQL Dialect Detector

SQL Dialect Detector is a powerful JavaScript library that detects the SQL dialect used in a given SQL query. It supports various SQL databases including PostgreSQL, MySQL, Oracle, SQL Server, SQLite, Amazon Redshift, Google BigQuery, and many more.

## Features

- Detects the SQL dialect based on keywords, built-in functions, and unique SQL structures.
- Supports a wide range of databases including:
    - PostgreSQL
    - MySQL
    - SQL Server
    - Oracle
    - SQLite
    - Amazon Redshift
    - Google BigQuery
    - IBM Db2
    - Apache Hive
    - Couchbase (N1QL)
    - SingleStoreDB
    - Snowflake
    - Apache Spark
    - Trino
    - Amazon Athena
- Provides a confidence level for each detected dialect.
- Lightweight and easy to integrate.

## Installation

To install the library, use npm:

```bash
npm install sql-dialect-detector
```

## Usage

Here's a simple example of how to use SQL Dialect Detector in your project:

```javascript
import SQLDialectDetector from 'sql-dialect-detector';

const sqlQuery = `
SELECT COUNT(*) FROM users WHERE created_at > '2023-01-01';
`;

const detector = new SQLDialectDetector();
const detectedDialects = detector.detectSQLDialects(sqlQuery);

console.log(detectedDialects);
```

## Example HTML Integration

You can integrate the library into an HTML page as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SQL Dialect Detector Test</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/theme/monokai.min.css">
</head>
<body>
  <div class="container mt-5">
    <h1>SQL Dialect Detector</h1>
    <textarea id="sql-query" name="sql-query"></textarea>
    <button onclick="detectDialect()">Detect SQL Dialect</button>
    <div id="detected-dialects"></div>
  </div>

  <script src="dist/sql-dialect-detector.min.js"></script>
  <script>
    function detectDialect() {
      const sqlQuery = document.getElementById('sql-query').value;
      const detector = new SQLDialectDetector();
      const detectedDialects = detector.detectSQLDialects(sqlQuery);

      document.getElementById('detected-dialects').textContent = JSON.stringify(detectedDialects, null, 2);
    }
  </script>
</body>
</html>
```

## Configuration

You can configure the library with different settings to optimize detection accuracy for your use case.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Hien Tran**
