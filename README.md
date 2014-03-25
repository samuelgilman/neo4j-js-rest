neo4j-js-reset
==============

### About

This is a Node.js wrapper for the Neo4j REST API. It's made for developers that want to use cypher instead of a DSL for CRUD operations using Neo4j's REST API.

### Install

    npm install neo4j-js-rest

### Usage

Init the module with a REST API url and then run commands with two args: 

1. query
2. params

These are the same thing as accessing the REST API directly. The only difference is the query is an array of commands that this module will join.


    var db = require('neo4j-js-rest');
    var url = 'http://localhost:7474/db/data/cypher'

    db.init({

      url: url

    }, function (err) {

      if (err) {

        console.log(err);

      } else {

        db.run({

          query: [
            'MATCH (n)',
            'RETURN id(n) AS id',
            'LIMIT 100'
          ],
          params: {}

        }, function (err, json) {

          console.log(err, json);

        });

      }

    });
