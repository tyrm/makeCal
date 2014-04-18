var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/text"});
  response.write("Hello World");
  response.end();
}).listen(8888);



/*



{
  "calendar" : {
    "month" : 4,
    "mon": "April",
    "year" : 2014,
    "rows" : [
      [
        {"day": null},
        {"day": null},
        {"day": 1,
          "events": [
            {"title": "I'm an Event", "hour": 17, "minute": 0},
            {"title": "I'm also an Event", "hour": 19, "minute": 30}
          ]
        },
        {"day": 2},
        {"day": 3},
        {"day": 4},
        {"day": 5}
      ],
      [
        {"day": 6},
        {"day": 7},
        {"day": 8},
        {"day": 9},
        {"day": 10},
        {"day": 11},
        {"day": 12}
      ],
      [
        {"day": 13},
        {"day": 14},
        {"day": 15},
        {"day": 16},
        {"day": 17},
        {"day": 18},
        {"day": 19}
      ],
      [
        {"day": 20},
        {"day": 21},
        {"day": 22},
        {"day": 23},
        {"day": 24,
          "events": [
            {"title": "I'm an Event", "hour": 17, "minute": 0},
            {"title": "I'm also an Event", "hour": 19, "minute": 30}
          ]
        },
        {"day": 25},
        {"day": 26}
      ],
      [
        {"day": 27},
        {"day": 28},
        {"day": 29},
        {"day": 30},
        {"day": null},
        {"day": null},
        {"day": null}
      ]
    ]
  }
}
    
*/